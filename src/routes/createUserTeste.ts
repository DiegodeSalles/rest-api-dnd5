import { FastifyInstance } from "fastify";
import { User } from "../models/User";

export async function createUserTeste(app: FastifyInstance) {
  app.post(
    "/users/create",

    async (request, reply) => {
      const dados = new User(request.body);
      dados.save();

      return reply.status(200).send(dados);
    }
  );
}
// 66240bd30d588bd5e9955280
