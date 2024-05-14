import { config } from "dotenv";
import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { generateText } from "./routes/generate-text";
import { generateImage } from "./routes/generate-image";

config({encoding: "utf-8" })

const app = fastify({ logger: true });

app.listen({ port: 3333, host: '0.0.0.0'}).then(() => {
  console.log("http server running")
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(generateText);
app.register(generateImage);