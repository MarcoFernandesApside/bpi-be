/*
  Warnings:

  - A unique constraint covering the columns `[baseInfoId]` on the table `ChronicDisease` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ChronicDisease_baseInfoId_key" ON "ChronicDisease"("baseInfoId");
