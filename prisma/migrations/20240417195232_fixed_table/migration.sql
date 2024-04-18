/*
  Warnings:

  - You are about to drop the column `public_id` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_public_id_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "public_id";
