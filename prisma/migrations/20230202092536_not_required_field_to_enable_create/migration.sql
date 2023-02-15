-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContratedSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workerTypeId" INTEGER,
    "company" TEXT NOT NULL,
    "companySocialNumber" INTEGER NOT NULL,
    "timeInCompany" INTEGER NOT NULL,
    "netSalary" REAL NOT NULL,
    "companyLineOfWork" TEXT NOT NULL,
    CONSTRAINT "ContratedSim_workerTypeId_fkey" FOREIGN KEY ("workerTypeId") REFERENCES "WorkerTypeSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ContratedSim" ("company", "companyLineOfWork", "companySocialNumber", "id", "netSalary", "timeInCompany", "workerTypeId") SELECT "company", "companyLineOfWork", "companySocialNumber", "id", "netSalary", "timeInCompany", "workerTypeId" FROM "ContratedSim";
DROP TABLE "ContratedSim";
ALTER TABLE "new_ContratedSim" RENAME TO "ContratedSim";
CREATE UNIQUE INDEX "ContratedSim_workerTypeId_key" ON "ContratedSim"("workerTypeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
