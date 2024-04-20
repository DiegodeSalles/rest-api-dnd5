import { FastifyInstance } from "fastify";
import mongoose from "mongoose";

export async function createUserTeste(app: FastifyInstance) {
  app.post("/teste/user/create/", (request, reply) => {});
}
