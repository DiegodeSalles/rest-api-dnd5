import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { CheckPassword } from "../utils/passwordUtils";

export async function loginUser(app: FastifyInstance) {
  const createLoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  app.withTypeProvider<ZodTypeProvider>().post(
    "/users/login",
    {
      schema: {
        summary: "Login de usuário",
        tags: ["usuarios"],
        body: createLoginSchema,
        response: {
          201: z.boolean(),
        },
      },
    },
    async (request, reply) => {
      const { email, password } = request.body;

      const passwordCheck = await CheckPassword(password, email);

      return reply.status(201).send(passwordCheck);
    }
  );
}
