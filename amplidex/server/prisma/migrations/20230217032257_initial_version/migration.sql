-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Generation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monster" (
    "biology" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dexNumber" INTEGER NOT NULL,
    "generationId" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Typing" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Typing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MonsterToTyping" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Generation_name_key" ON "Generation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Monster_dexNumber_key" ON "Monster"("dexNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Monster_url_key" ON "Monster"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Typing_name_key" ON "Typing"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_MonsterToTyping_AB_unique" ON "_MonsterToTyping"("A", "B");

-- CreateIndex
CREATE INDEX "_MonsterToTyping_B_index" ON "_MonsterToTyping"("B");

-- AddForeignKey
ALTER TABLE "Monster" ADD CONSTRAINT "Monster_generationId_fkey" FOREIGN KEY ("generationId") REFERENCES "Generation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToTyping" ADD CONSTRAINT "_MonsterToTyping_A_fkey" FOREIGN KEY ("A") REFERENCES "Monster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MonsterToTyping" ADD CONSTRAINT "_MonsterToTyping_B_fkey" FOREIGN KEY ("B") REFERENCES "Typing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
