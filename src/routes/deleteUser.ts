import { FastifyInstance } from "fastify";
import { Character } from "../models/Character";
import { User } from "../models/User";
import mongoose from "mongoose";

export async function deleteUser(app: FastifyInstance) {
  app.delete("/users/:userId/", async (request, reply) => {
    const userId = new mongoose.Types.ObjectId(request.params.userId);

    await User.deleteOne({
      _id: userId,
    });

    const characters = await Character.find({ createdBy: userId });

    characters.forEach(async () => {
      await Character.deleteOne({ createdBy: userId });
    });

    return reply.status(200).send("Deletados");
  });
}
