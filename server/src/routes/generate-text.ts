import { GoogleGenerativeAI } from "@google/generative-ai";
import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { validateToken } from "../utils/validateToken";

export async function generateText(app: FastifyInstance): Promise<void> {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post("/api/v1/generate-text", {
      schema: {
        body: z.object({
          model: z.string(),
          prompt: z.string()
        }),
        headers: z.object({
          authorization: z.string()
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

      // const authorization  = request.headers['authorization'];
      const { authorization } = request.headers;

      const { model, prompt } = request.body;

      const token = validateToken(authorization);

      const genAI = new GoogleGenerativeAI(token);

      const genAIInstance = genAI.getGenerativeModel({ model });
      const result = await genAIInstance.generateContent(prompt);
      const text = result.response.text();

      return reply.status(201).send({
        data: {
          model,
          prompt,
          text
        }
      });
    })
};