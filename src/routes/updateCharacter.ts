import { FastifyInstance } from "fastify";
import { Character } from "../models/Character";
import mongoose from "mongoose";

export async function updateCharacter(app: FastifyInstance) {
  app.patch("/users/:userId/:characterId", async (request, reply) => {
    const userId = new mongoose.Types.ObjectId(request.params.userId);
    const characterId = new mongoose.Types.ObjectId(request.params.characterId);

    const updatedCharacter = await Character.findOneAndUpdate(
      { _id: characterId, createdBy: userId },
      request.body,
      { returnDocument: "after" }
    );

    return reply.status(200).send(updatedCharacter);
  });
}
