import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider, //Como isso é um tipo, é necessário colocar type
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>(); //Extende o fastify para utilizar como provedor de tipos o zod

app.register(fastifyCors, {
  origin: "http://localhost:3000",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: 3000 }).then(() => {
  console.log("HTTP server online!!");
});
