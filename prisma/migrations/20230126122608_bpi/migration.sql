/*
  Warnings:

  - Added the required column `isApproved` to the `ResultSim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeSimId` to the `ProductSim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `simulationId` to the `ProductSim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financedAmount` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthsNeeded` to the `Simulation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `needsGuarantor` to the `CarSim` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "WorkerTypeSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "simulationId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "WorkerTypeSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndependentSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workerTypeId" INTEGER NOT NULL,
    "timeAsIndependent" DATETIME NOT NULL,
    "averageMonthlyIncome" REAL NOT NULL,
    "lineOfWork" TEXT NOT NULL,
    "personalNetworth" REAL NOT NULL,
    "annualIncome" REAL NOT NULL,
    CONSTRAINT "IndependentSim_workerTypeId_fkey" FOREIGN KEY ("workerTypeId") REFERENCES "WorkerTypeSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ContratedSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workerTypeId" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "companySocialNumber" INTEGER NOT NULL,
    "timeInCompany" DATETIME NOT NULL,
    "netSalary" REAL NOT NULL,
    "companyLineOfWork" TEXT NOT NULL,
    CONSTRAINT "ContratedSim_workerTypeId_fkey" FOREIGN KEY ("workerTypeId") REFERENCES "WorkerTypeSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BaseInfoSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "simulationId" INTEGER,
    "homeSimId" INTEGER,
    "carSimId" INTEGER,
    "age" INTEGER NOT NULL,
    "socialNumber" INTEGER NOT NULL,
    CONSTRAINT "BaseInfoSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BaseInfoSim_homeSimId_fkey" FOREIGN KEY ("homeSimId") REFERENCES "HomeSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BaseInfoSim_carSimId_fkey" FOREIGN KEY ("carSimId") REFERENCES "CarSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChronicDisease" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "baseInfoId" INTEGER NOT NULL,
    CONSTRAINT "ChronicDisease_baseInfoId_fkey" FOREIGN KEY ("baseInfoId") REFERENCES "BaseInfoSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ResultSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isApproved" BOOLEAN NOT NULL
);
INSERT INTO "new_ResultSim" ("id") SELECT "id" FROM "ResultSim";
DROP TABLE "ResultSim";
ALTER TABLE "new_ResultSim" RENAME TO "ResultSim";
CREATE TABLE "new_ProductSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "simulationId" INTEGER NOT NULL,
    "carSimId" INTEGER NOT NULL,
    "homeSimId" INTEGER NOT NULL,
    CONSTRAINT "ProductSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductSim_carSimId_fkey" FOREIGN KEY ("carSimId") REFERENCES "CarSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductSim_homeSimId_fkey" FOREIGN KEY ("homeSimId") REFERENCES "HomeSim" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductSim" ("carSimId", "id", "type") SELECT "carSimId", "id", "type" FROM "ProductSim";
DROP TABLE "ProductSim";
ALTER TABLE "new_ProductSim" RENAME TO "ProductSim";
CREATE UNIQUE INDEX "ProductSim_simulationId_key" ON "ProductSim"("simulationId");
CREATE UNIQUE INDEX "ProductSim_carSimId_key" ON "ProductSim"("carSimId");
CREATE UNIQUE INDEX "ProductSim_homeSimId_key" ON "ProductSim"("homeSimId");
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL NOT NULL,
    "financedAmount" REAL NOT NULL,
    "monthsNeeded" INTEGER NOT NULL
);
INSERT INTO "new_Simulation" ("id") SELECT "id" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
CREATE TABLE "new_CarSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "needsGuarantor" BOOLEAN NOT NULL
);
INSERT INTO "new_CarSim" ("id") SELECT "id" FROM "CarSim";
DROP TABLE "CarSim";
ALTER TABLE "new_CarSim" RENAME TO "CarSim";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "WorkerTypeSim_simulationId_key" ON "WorkerTypeSim"("simulationId");

-- CreateIndex
CREATE UNIQUE INDEX "IndependentSim_workerTypeId_key" ON "IndependentSim"("workerTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "ContratedSim_workerTypeId_key" ON "ContratedSim"("workerTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "BaseInfoSim_simulationId_key" ON "BaseInfoSim"("simulationId");

-- CreateIndex
CREATE UNIQUE INDEX "BaseInfoSim_homeSimId_key" ON "BaseInfoSim"("homeSimId");

-- CreateIndex
CREATE UNIQUE INDEX "BaseInfoSim_carSimId_key" ON "BaseInfoSim"("carSimId");

-- CreateIndex
CREATE UNIQUE INDEX "ChronicDisease_baseInfoId_key" ON "ChronicDisease"("baseInfoId");
