import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getUsers(app: FastifyInstance) {
  const usersSchema = z.object({
    id: z.string().uuid(),
    public_id: z.number(),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.date(),
  });

  app.withTypeProvider<ZodTypeProvider>().get(
    "/users",
    {
      schema: {
        summary: "Rota de testes com lista de usuários.",
        tags: ["usuarios"],
        response: {
          200: z.array(usersSchema),
        },
      },
    },
    async (request, reply) => {
      const usuarios = await prisma.teste.findMany({
        select: {
          id: true,
          public_id: true,
          email: true,
          password: true,
          createdAt: true,
        },
      });

      return reply.send(usuarios.map((usuario) => usuario));
    }
  );
}
