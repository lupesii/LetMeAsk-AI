import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider, //Como isso é um tipo, é necessário colocar type
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { getRoomsRoutes } from './http/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>() //Extende o fastify para utilizar como provedor de tipos o zod
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRoutes)

app.listen({ port: env.PORT })
