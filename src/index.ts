import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { createUser } from "./routes/createUser";

import mongoose from "mongoose";

import { createCharacter } from "./routes/createCharacter";
import { getUsers } from "./routes/getUsers";
import { deleteCharacter } from "./routes/deleteCharacter";
import { deleteUser } from "./routes/deleteUser";
import { getUserCharacters } from "./routes/getUserCharacters";
import { updateUser } from "./routes/updateUser";
import { updateCharacter } from "./routes/updateCharacter";

async function main() {
  mongoose.connect(process.env.MONGO_URL as string);
}

const app = Fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Criador de ficha D&D 5e",
      description:
        "Especificações da API para o back-end de um criador de ficha de D&D 5e e cadastramento de jogadores",
      version: "1.0.0",
    },
  },
});

app.register(fastifySwaggerUi, { routePrefix: "/docs" });

app.register(createUser);
app.register(createCharacter);
app.register(getUsers);
app.register(deleteCharacter);
app.register(deleteUser);
app.register(getUserCharacters);
app.register(updateUser);
app.register(updateCharacter);

const start = async () => {
  try {
    await app.listen({ port: 3000, host: "0.0.0.0" });
    console.log("http://127.0.0.1:3000");
    main().catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
