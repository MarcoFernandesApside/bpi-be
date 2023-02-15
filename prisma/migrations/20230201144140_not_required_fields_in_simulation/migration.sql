-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Simulation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "amount" REAL,
    "financedAmount" REAL,
    "monthsNeeded" INTEGER,
    "state" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "updatedBy" TEXT,
    "isFinalized" BOOLEAN NOT NULL
);
INSERT INTO "new_Simulation" ("amount", "financedAmount", "id", "isFinalized", "monthsNeeded", "state", "updatedAt", "updatedBy") SELECT "amount", "financedAmount", "id", "isFinalized", "monthsNeeded", "state", "updatedAt", "updatedBy" FROM "Simulation";
DROP TABLE "Simulation";
ALTER TABLE "new_Simulation" RENAME TO "Simulation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
