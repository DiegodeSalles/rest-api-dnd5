import { FastifyInstance } from "fastify";
import { Character } from "../models/Character";
import mongoose from "mongoose";
import { User } from "../models/User";

export async function createCharacterTeste(app: FastifyInstance) {
  app.post("/users/:id/create", async (request: any, reply) => {
    try {
      const userId = new mongoose.Types.ObjectId(request.params);
      const characterData: object | any = request.body;
      characterData.createdBy = userId;
      const character = new Character(characterData);
      await character.save();

      await User.findByIdAndUpdate(userId, {
        $push: { charater_sheets_ids: character._id },
      });

      reply.send(character);
    } catch (error) {
      return reply.status(500).send(error);
    }
  });
}
