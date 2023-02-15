-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductSim" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "simulationId" INTEGER,
    "carSimId" INTEGER,
    "homeSimId" INTEGER,
    CONSTRAINT "ProductSim_simulationId_fkey" FOREIGN KEY ("simulationId") REFERENCES "Simulation" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProductSim_carSimId_fkey" FOREIGN KEY ("carSimId") REFERENCES "CarSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "ProductSim_homeSimId_fkey" FOREIGN KEY ("homeSimId") REFERENCES "HomeSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProductSim" ("carSimId", "homeSimId", "id", "simulationId", "type") SELECT "carSimId", "homeSimId", "id", "simulationId", "type" FROM "ProductSim";
DROP TABLE "ProductSim";
ALTER TABLE "new_ProductSim" RENAME TO "ProductSim";
CREATE UNIQUE INDEX "ProductSim_simulationId_key" ON "ProductSim"("simulationId");
CREATE UNIQUE INDEX "ProductSim_carSimId_key" ON "ProductSim"("carSimId");
CREATE UNIQUE INDEX "ProductSim_homeSimId_key" ON "ProductSim"("homeSimId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
