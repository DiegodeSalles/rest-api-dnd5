-- CreateTable
CREATE TABLE "testes" (
    "id" TEXT NOT NULL,
    "public_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT,
    "teste" JSONB,

    CONSTRAINT "testes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testes_public_id_key" ON "testes"("public_id");
