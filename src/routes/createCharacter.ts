import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { characterSchema } from "../lib/characterSheet";
import { ZodTypeProvider } from "fastify-type-provider-zod";

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
          201: characterSchema,
        },
      },
    },
    async (request, reply) => {
      const { user } = request.params;
      const {
        charName,
        race,
        character_class,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        health,
      } = request.body;

      const character = await prisma.characterSheet.create({
        data: {
          user_id: user,
          charName,
          race,
          character_class,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
          health,
        },
      });

      return reply.status(201).send(character);
    }
  );
}
