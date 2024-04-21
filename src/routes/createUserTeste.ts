import { FastifyInstance } from "fastify";
import { User } from "../models/User";
import { UserInterface } from "../interfaces/userInterface";
import { GeneratePassword } from "../utils/passwordUtils";

export async function createUserTeste(app: FastifyInstance) {
  app.post(
    "/users/create",

    async (request, reply) => {
      const { email, name, password } = <UserInterface>request.body;

      const hashedPassword = await GeneratePassword(password);
      const user = new User({
        email,
        name,
        password: hashedPassword,
      });

      user.save();

      return reply.status(200).send(user);
    }
  );
}
