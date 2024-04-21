import { FastifyInstance } from "fastify";
import mongoose from "mongoose";
import { User } from "../models/User";
import { GeneratePassword } from "../utils/passwordUtils";

export async function updateUser(app: FastifyInstance) {
  app.patch("/users/:userId", async (request, reply) => {
    const userId = new mongoose.Types.ObjectId(request.params.userId);

    const { email, name, password } = request.body;

    const updatedUser = {
      email,
      name,
      password,
    };

    if (password) {
      const hashPassword = await GeneratePassword(password);
      updatedUser.password = hashPassword;
    }

    const user = await User.findOneAndUpdate({ _id: userId }, updatedUser, {
      returnDocument: "after",
    });

    return reply.status(200).send(user);
  });
}
