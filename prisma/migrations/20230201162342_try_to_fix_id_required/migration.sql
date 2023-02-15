-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkerTypeSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "simulationId" INTEGER,
    "type" TEXT NOT NULL,
    CONSTRAINT "WorkerTypeSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_WorkerTypeSim" ("id", "simulationId", "type") SELECT "id", "simulationId", "type" FROM "WorkerTypeSim";
DROP TABLE "WorkerTypeSim";
ALTER TABLE "new_WorkerTypeSim" RENAME TO "WorkerTypeSim";
CREATE UNIQUE INDEX "WorkerTypeSim_simulationId_key" ON "WorkerTypeSim"("simulationId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
