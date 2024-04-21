import { FastifyInstance } from "fastify";
import { User } from "../models/User";

export async function getUsers(app: FastifyInstance) {
  app.get("/users", async (request, reply) => {
    const users = await User.find().populate("character_sheets_ids").exec();
    return reply.status(201).send(users);
  });
}
