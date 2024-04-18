import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { characterSchema } from "../lib/characterSheet";
import {
  ZodTypeProvider,
  createJsonSchemaTransform,
} from "fastify-type-provider-zod";

export async function createCharacter(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/users/:user/characters",
    {
      schema: {
        summary: "Criação de ficha de personagem",
        tags: ["fichas"],
        body: characterSchema,
        params: z.object({
          user: z.string().uuid(),
        }),
        response: {
          201: z.boolean(),
        },
      },
    },
    async (request, reply) => {
      const { user } = request.params;
      const { character_data } = request.body;

      await prisma.characterSheet.create({
        data: {
          user_id: user,
          character_data,
        },
      });

      return reply.status(201).send(true);
    }
  );
}
