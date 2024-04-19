import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { characterSchema } from "../lib/characterSheet";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export async function createCharacter(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/users/:user/characters/create",
    {
      schema: {
        summary: "Criação de ficha de personagem",
        tags: ["fichas"],
        body: characterSchema,
        params: z.object({
          user: z.string().uuid(),
        }),
        response: {
          201: z.object({
            id: z.number(),
            user_id: z.string().uuid(),
            character_data: characterSchema,
            createdAt: z.date().nullish(),
            updatedAt: z.date().nullish(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { user } = request.params;
      const { ...character_data } = request.body;

      const character = await prisma.characterSheet.create({
        data: {
          user_id: user,
          character_data,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });

      return reply.status(201).send({
        id: character.id,
        user_id: character.user_id,
        character_data: Object(character.character_data),
        createdAt: character.createdAt,
        updatedAt: character.updatedAt,
      });
    }
  );
}
