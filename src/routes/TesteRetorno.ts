import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

export async function retornaTeste(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/teste/retorno",
    {
      schema: {
        summary: "Teste de rota",
        tags: ["testes"],
        response: {
          200: z.array(
            z.object({
              name: z.string().nullish(),
              email: z.string().nullish(),
              createdAt: z.date().nullish(),
              coisas: z
                .array(
                  z.object({
                    nome_da_coisa: z.string().nullish(),
                    quantidade: z.number().nullish(),
                    isCoisa: z.boolean().nullish(),
                    dataCoisa: z.date().nullish(),
                  })
                )
                .nullish(),
            })
          ),
        },
      },
    },

    async (request, reply) => {}
  );
}
