/*
  Warnings:

  - Added the required column `name` to the `ChronicDisease` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Simulation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ChronicDisease" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "baseInfoId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "ChronicDisease_baseInfoId_fkey" FOREIGN KEY ("baseInfoId") REFERENCES "BaseInfoSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ChronicDisease" ("baseInfoId", "id") SELECT "baseInfoId", "id" FROM "ChronicDisease";
DROP TABLE "ChronicDisease";
ALTER TABLE "new_ChronicDisease" RENAME TO "ChronicDisease";
CREATE UNIQUE INDEX "ChronicDisease_baseInfoId_key" ON "ChronicDisease"("baseInfoId");
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "financedAmount" REAL NOT NULL,
    "monthsNeeded" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "updatedBy" TEXT NOT NULL
);
INSERT INTO "new_Simulation" ("amount", "financedAmount", "id", "monthsNeeded") SELECT "amount", "financedAmount", "id", "monthsNeeded" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
