import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { usersSchema } from "../lib/user";

export async function getUsers(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/users",
    {
      schema: {
        summary: "Rota de testes com lista de usuários.",
        tags: ["usuarios"],
        response: {
          200: usersSchema,
        },
      },
    },
    async (request, reply) => {
      const usuarios = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          createdAt: true,
          character_sheets: true,
        },
      });

      return reply.send();
    }
  );
}
