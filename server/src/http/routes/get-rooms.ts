import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { schema } from '../../db/schema/index.ts'
import { db } from '../../db/connection.ts'

export const getRoomsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    const results = await db
      .select({
        name: schema.rooms.name,
        createAt: schema.rooms.createAt,
      })
      .from(schema.rooms)
      .orderBy(schema.rooms.createAt)

    return results
  })
}
