-- CreateTable
CREATE TABLE "Session" (
    "sid" TEXT NOT NULL,
    "sess" JSONB NOT NULL,
    "expire" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");
