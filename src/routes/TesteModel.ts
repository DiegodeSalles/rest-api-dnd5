import { FastifyInstance } from "fastify";
import { Character as testeCharacter } from "../models/CharacterSheet";

export async function testeRota(app: FastifyInstance) {
  app.post(
    "/teste/create",

    async (request, reply) => {
      const dados = new testeCharacter(request.body);
      dados.save();

      return reply.status(200).send(dados);
    }
  );
}
