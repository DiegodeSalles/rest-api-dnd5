import { FastifyInstance } from "fastify";
import { Character } from "../models/Character";
import { User } from "../models/User";
import mongoose from "mongoose";

export async function deleteCharacter(app: FastifyInstance) {
  app.delete("/users/:userId/:characterId", async (request, reply) => {
    const userId = new mongoose.Types.ObjectId(request.params.userId);
    const characterId = new mongoose.Types.ObjectId(request.params.characterId);

    const deletedCharacter = await Character.deleteOne({
      _id: characterId,
      createdBy: userId,
    });

    if (deletedCharacter.deletedCount === 1) {
      const updateUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { character_sheets_ids: characterId } },
        { new: true }
      );
      if (updateUser) {
        return reply
          .status(200)
          .send(`${deletedCharacter.deletedCount} personagem foi deletado.`);
      } else {
        return reply.status(404).send("Usuário não encontrado.");
      }
    } else {
      return reply.status(404).send("Personagem não encontrado.");
    }
  });
}
