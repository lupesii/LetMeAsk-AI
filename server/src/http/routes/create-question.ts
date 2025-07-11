import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod/v4'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const createQuestion: FastifyPluginCallbackZod = (app) => {
  app.post(
    '/rooms/:roomId/questions',
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (req, res) => {
      const { roomId } = req.params
      const { question } = req.body

      const result = await db
        .insert(schema.questions)
        .values({ roomId, question })
        .returning()

      const insertedQuestion = result[0]

      if (!insertedQuestion) {
        throw new Error('Failed to create question')
      }

      return res.status(201).send(insertedQuestion)
    }
  )
}
