"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const fastify = (0, fastify_1.default)({ logger: true });
fastify.register(routes_1.routes);
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: "0.0.0.0" });
        console.log("http://127.0.0.1:3000");
    }
    catch (error) {
        process.exit(1);
    }
};
start();
