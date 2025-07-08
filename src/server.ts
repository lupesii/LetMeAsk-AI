import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider, //Como isso é um tipo, é necessário colocar type
} from 'fastify-type-provider-zod'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>() //Extende o fastify para utilizar como provedor de tipos o zod

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return 'OK'
})

app.listen({ port: env.PORT })
