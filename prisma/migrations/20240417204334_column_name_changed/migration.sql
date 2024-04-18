/*
  Warnings:

  - You are about to drop the column `class` on the `character_sheets` table. All the data in the column will be lost.
  - Added the required column `character_class` to the `character_sheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character_sheets" DROP COLUMN "class",
ADD COLUMN     "character_class" TEXT NOT NULL;
