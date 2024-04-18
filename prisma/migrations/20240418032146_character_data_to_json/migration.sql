/*
  Warnings:

  - You are about to drop the column `charName` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `character_class` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `charisma` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `constitution` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `health` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `race` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `character_sheets` table. All the data in the column will be lost.
  - You are about to drop the column `wisdom` on the `character_sheets` table. All the data in the column will be lost.
  - Added the required column `character_data` to the `character_sheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character_sheets" DROP COLUMN "charName",
DROP COLUMN "character_class",
DROP COLUMN "charisma",
DROP COLUMN "constitution",
DROP COLUMN "dexterity",
DROP COLUMN "health",
DROP COLUMN "intelligence",
DROP COLUMN "race",
DROP COLUMN "strength",
DROP COLUMN "wisdom",
ADD COLUMN     "character_data" JSONB NOT NULL;
