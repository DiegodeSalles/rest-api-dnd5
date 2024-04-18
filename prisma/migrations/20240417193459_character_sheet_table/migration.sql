/*
  Warnings:

  - You are about to drop the `testes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "testes";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "public_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_sheets" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "charName" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "strength" INTEGER NOT NULL,
    "dexterity" INTEGER NOT NULL,
    "constitution" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "wisdom" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,

    CONSTRAINT "character_sheets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_public_id_key" ON "users"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "character_sheets_user_id_key" ON "character_sheets"("user_id");

-- AddForeignKey
ALTER TABLE "character_sheets" ADD CONSTRAINT "character_sheets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
