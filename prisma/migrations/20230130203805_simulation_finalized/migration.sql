/*
  Warnings:

  - Added the required column `isFinalized` to the `WorkerTypeSim` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkerTypeSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "simulationId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "isFinalized" BOOLEAN NOT NULL,
    CONSTRAINT "WorkerTypeSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WorkerTypeSim" ("id", "simulationId", "type") SELECT "id", "simulationId", "type" FROM "WorkerTypeSim";
DROP TABLE "WorkerTypeSim";
ALTER TABLE "new_WorkerTypeSim" RENAME TO "WorkerTypeSim";
CREATE UNIQUE INDEX "WorkerTypeSim_simulationId_key" ON "WorkerTypeSim"("simulationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
