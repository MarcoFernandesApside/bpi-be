-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_IndependentSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workerTypeId" INTEGER NOT NULL,
    "timeAsIndependent" INTEGER NOT NULL,
    "averageMonthlyIncome" REAL NOT NULL,
    "lineOfWork" TEXT NOT NULL,
    "personalNetworth" REAL,
    "annualIncome" REAL NOT NULL,
    CONSTRAINT "IndependentSim_workerTypeId_fkey" FOREIGN KEY ("workerTypeId") REFERENCES "WorkerTypeSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_IndependentSim" ("annualIncome", "averageMonthlyIncome", "id", "lineOfWork", "personalNetworth", "timeAsIndependent", "workerTypeId") SELECT "annualIncome", "averageMonthlyIncome", "id", "lineOfWork", "personalNetworth", "timeAsIndependent", "workerTypeId" FROM "IndependentSim";
DROP TABLE "IndependentSim";
ALTER TABLE "new_IndependentSim" RENAME TO "IndependentSim";
CREATE UNIQUE INDEX "IndependentSim_workerTypeId_key" ON "IndependentSim"("workerTypeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
