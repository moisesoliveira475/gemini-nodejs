import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { validateToken } from "../utils/validateToken";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateImage(app: FastifyInstance): Promise<void> {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post("/api/v1/generate-image", {
      schema: {
        body: z.object({
          imageObj: z.object({
            parameter: z.string(),
            value: z.string().base64(),
          }),
          promptObj: z.object({
            parameter: z.string(),
            value: z.string()
          }),
          modelObj: z.object({
            parameter: z.string(),
            value: z.string()
          })
        }),
        headers: z.object({
          201: z.object({
            authorization: z.string()
          })
        }),
        response: {
          201: z.object({
            data: z.object({
              model: z.string(),
              prompt: z.string(),
              text: z.string()
            })
          })
        }
      }
    }, async (request, reply) => {

      const { authorization } = request.headers;
      const { imageObj, promptObj, modelObj } = request.body;

      const token = validateToken(authorization);

      const genAI = new GoogleGenerativeAI(token)

      function fileToGenerativePart(image: string, mimeType: string) {
        return {
          inlineData: {
            data: image,
            mimeType
          },
        }
      }

      const model = modelObj.value;
      const prompt = promptObj.value;

      const genAIInstance = genAI.getGenerativeModel({ model });

      const imageParts = [fileToGenerativePart(imageObj.value, imageObj.parameter)];

      const result = await genAIInstance.generateContent([promptObj.value, ...imageParts]);
      const text = result.response.text();

      return reply.status(201).send({
        data: {
          model,
          prompt,
          text
        }
      });
    }
  )
};