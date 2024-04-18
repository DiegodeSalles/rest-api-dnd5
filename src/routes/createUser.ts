import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { GeneratePassword } from "../utils/passwordUtils";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { UserExists } from "../utils/userExists";

export async function createUser(app: FastifyInstance) {
  const createUserSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3, "O nome deve ter o mínimo de 10 caracteres."),
    password: z.string().min(5, "A senha precisa de no mínimo 5 caracteres."),
  });

  app.withTypeProvider<ZodTypeProvider>().post(
    "/users/create",
    {
      schema: {
        summary: "Criação de usuário",
        tags: ["usuarios"],
        body: createUserSchema,
        response: {
          201: z.string(),
        },
      },
    },
    async (request, reply) => {
      const { email, password, name } = request.body;

      const exists = await UserExists(email);

      if (exists !== null) {
        throw new Error("Email já cadastrado.");
      }

      const securePassword = await GeneratePassword(password);
      const user = await prisma.user.create({
        data: {
          email,
          password: securePassword,
          name,
          createdAt: new Date(),
        },
      });
      return reply
        .status(201)
        .send(`Usuário ${user.email} foi criado com sucesso!`);
    }
  );
}
