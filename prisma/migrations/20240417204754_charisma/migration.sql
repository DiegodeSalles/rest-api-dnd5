/*
  Warnings:

  - Added the required column `charisma` to the `character_sheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character_sheets" ADD COLUMN     "charisma" INTEGER NOT NULL;
