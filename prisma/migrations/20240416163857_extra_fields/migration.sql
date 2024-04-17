/*
  Warnings:

  - You are about to drop the column `nome` on the `testes` table. All the data in the column will be lost.
  - You are about to drop the column `sobrenome` on the `testes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `testes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdAt` to the `testes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `testes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `testes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `testes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "testes" DROP COLUMN "nome",
DROP COLUMN "sobrenome",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "testes_email_key" ON "testes"("email");
