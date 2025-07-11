import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider, //Como isso é um tipo, é necessário colocar type
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { getRoomsRoutes } from './http/routes/get-room.ts'
import { createRoomsRoutes } from './http/routes/create-room.ts'
import { getRoomsQuestionsRoute } from './http/routes/get-room-question.ts'
import { createQuestion } from './http/routes/create-question.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>() //Extende o fastify para utilizar como provedor de tipos o zod
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRoutes)
app.register(createRoomsRoutes)
app.register(getRoomsQuestionsRoute)
app.register(createQuestion)

app.listen({ port: env.PORT })
