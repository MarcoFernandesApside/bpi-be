/*
  Warnings:

  - You are about to drop the column `isFinalized` on the `WorkerTypeSim` table. All the data in the column will be lost.
  - Added the required column `isFinalized` to the `Simulation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkerTypeSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "simulationId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "WorkerTypeSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WorkerTypeSim" ("id", "simulationId", "type") SELECT "id", "simulationId", "type" FROM "WorkerTypeSim";
DROP TABLE "WorkerTypeSim";
ALTER TABLE "new_WorkerTypeSim" RENAME TO "WorkerTypeSim";
CREATE UNIQUE INDEX "WorkerTypeSim_simulationId_key" ON "WorkerTypeSim"("simulationId");
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "financedAmount" REAL NOT NULL,
    "monthsNeeded" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "updatedBy" TEXT NOT NULL,
    "isFinalized" BOOLEAN NOT NULL
);
INSERT INTO "new_Simulation" ("amount", "financedAmount", "id", "monthsNeeded", "state", "updatedAt", "updatedBy") SELECT "amount", "financedAmount", "id", "monthsNeeded", "state", "updatedAt", "updatedBy" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
