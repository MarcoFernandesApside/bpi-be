-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ChronicDisease" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "baseInfoId" INTEGER,
    "name" TEXT NOT NULL,
    CONSTRAINT "ChronicDisease_baseInfoId_fkey" FOREIGN KEY ("baseInfoId") REFERENCES "BaseInfoSim" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ChronicDisease" ("baseInfoId", "id", "name") SELECT "baseInfoId", "id", "name" FROM "ChronicDisease";
DROP TABLE "ChronicDisease";
ALTER TABLE "new_ChronicDisease" RENAME TO "ChronicDisease";
CREATE UNIQUE INDEX "ChronicDisease_baseInfoId_key" ON "ChronicDisease"("baseInfoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
