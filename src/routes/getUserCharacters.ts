import { FastifyInstance } from "fastify";
import mongoose from "mongoose";
import { Character } from "../models/Character";

export async function getUserCharacters(app: FastifyInstance) {
  app.get("/users/:userId", async (request, reply) => {
    const userId = new mongoose.Types.ObjectId(request.params.userId);

    const characters = await Character.find({ createdBy: userId });

    return reply.status(200).send(characters);
  });
}
