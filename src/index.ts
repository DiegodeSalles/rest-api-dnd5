import Fastify from "fastify";
import { createUser } from "./routes/createUser";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { getUsers } from "./routes/getUsers";
import { loginUser } from "./routes/loginUser";
import { createCharacter } from "./routes/createCharacter";
import mongoose from "mongoose";
import { testeRota } from "./routes/TesteModel";
import { retornaTeste } from "./routes/TesteRetorno";

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
  // transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, { routePrefix: "/docs" });
app.register(createUser);
app.register(getUsers);
app.register(loginUser);
// app.register(createCharacter);
app.register(testeRota);
app.register(retornaTeste);

const start = async () => {
  try {
    await app.listen({ port: 3000, host: "0.0.0.0" });
    console.log("http://127.0.0.1:3000");
    main().catch((err) => console.log(err));
  } catch (error) {
    process.exit(1);
  }
};

start();
