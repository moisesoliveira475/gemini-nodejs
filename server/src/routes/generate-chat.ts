import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { validateToken } from "../utils/validateToken";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateChat(app: FastifyInstance): Promise<void> {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post("/api/v1/generate-chat", {
      schema: {
        body: z.object({
          model: z.string(),
          prompt: z.string()
        }),
        headers: z.object({
          authorization: z.string()
        }),
        response: {

        }
      }
    }, async (request, reply) => {
      const { model, prompt } = request.body;
      const { authorization } = request.headers;

      const token = validateToken(authorization);

      const genAI = new GoogleGenerativeAI(token);
      const genAIInstance = genAI.getGenerativeModel({ model, systemInstruction: "Me responda em pt-BR e em inglês" })

      const chat = genAIInstance.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "hello, I have 2 dogs in my house" }]
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 100,
          temperature: 1,
          topP: 0.95
        }
      })

      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

      return reply.status(201).send({ text })
    }
  )
}