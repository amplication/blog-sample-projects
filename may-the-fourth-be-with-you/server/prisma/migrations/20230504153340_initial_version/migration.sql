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
CREATE TABLE "Person" (
    "birthYear" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "eyeColor" TEXT,
    "gender" TEXT,
    "hairColor" TEXT,
    "height" INTEGER,
    "id" TEXT NOT NULL,
    "mass" DOUBLE PRECISION,
    "name" TEXT,
    "planetId" TEXT,
    "skinColor" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Starship" (
    "cargoCapacity" DOUBLE PRECISION,
    "consumables" TEXT,
    "costInCredits" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "crew" TEXT,
    "description" TEXT,
    "hyperdriveRating" DOUBLE PRECISION,
    "id" TEXT NOT NULL,
    "length" DOUBLE PRECISION,
    "manufacturer" JSONB,
    "maxAtmospheringSpeed" INTEGER,
    "mglt" INTEGER,
    "model" TEXT,
    "name" TEXT,
    "passengers" TEXT,
    "starshipClass" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Starship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "cargoCapacity" DOUBLE PRECISION,
    "consumables" TEXT,
    "costInCredits" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "crew" TEXT,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "length" DOUBLE PRECISION,
    "manufacturer" JSONB,
    "maxAtmospheringSpeed" INTEGER,
    "model" TEXT,
    "name" TEXT,
    "passengers" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vehicleClass" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "averageHeight" DOUBLE PRECISION,
    "averageLifespan" INTEGER,
    "classification" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "designation" TEXT,
    "eyeColors" JSONB,
    "hairColors" JSONB,
    "id" TEXT NOT NULL,
    "language" TEXT,
    "name" TEXT,
    "skinColors" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planet" (
    "climates" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "diameter" INTEGER,
    "gravity" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "orbitalPeriod" INTEGER,
    "population" DOUBLE PRECISION,
    "rotationPeriod" INTEGER,
    "surfaceWater" DOUBLE PRECISION,
    "terrains" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "director" TEXT,
    "episodeId" INTEGER,
    "id" TEXT NOT NULL,
    "openingCrawl" TEXT,
    "producers" JSONB,
    "releaseDate" TIMESTAMP(3),
    "title" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PersonToRace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PersonToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PersonToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToPerson" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToPlanet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToRace" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToStarship" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FilmToVehicle" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToRace_AB_unique" ON "_PersonToRace"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToRace_B_index" ON "_PersonToRace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToStarship_AB_unique" ON "_PersonToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToStarship_B_index" ON "_PersonToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonToVehicle_AB_unique" ON "_PersonToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonToVehicle_B_index" ON "_PersonToVehicle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToPerson_AB_unique" ON "_FilmToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToPerson_B_index" ON "_FilmToPerson"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToPlanet_AB_unique" ON "_FilmToPlanet"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToPlanet_B_index" ON "_FilmToPlanet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToRace_AB_unique" ON "_FilmToRace"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToRace_B_index" ON "_FilmToRace"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToStarship_AB_unique" ON "_FilmToStarship"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToStarship_B_index" ON "_FilmToStarship"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToVehicle_AB_unique" ON "_FilmToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToVehicle_B_index" ON "_FilmToVehicle"("B");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToRace" ADD CONSTRAINT "_PersonToRace_A_fkey" FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToRace" ADD CONSTRAINT "_PersonToRace_B_fkey" FOREIGN KEY ("B") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToStarship" ADD CONSTRAINT "_PersonToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToStarship" ADD CONSTRAINT "_PersonToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToVehicle" ADD CONSTRAINT "_PersonToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonToVehicle" ADD CONSTRAINT "_PersonToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPerson" ADD CONSTRAINT "_FilmToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPerson" ADD CONSTRAINT "_FilmToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToPlanet" ADD CONSTRAINT "_FilmToPlanet_B_fkey" FOREIGN KEY ("B") REFERENCES "Planet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToRace" ADD CONSTRAINT "_FilmToRace_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToRace" ADD CONSTRAINT "_FilmToRace_B_fkey" FOREIGN KEY ("B") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToStarship" ADD CONSTRAINT "_FilmToStarship_B_fkey" FOREIGN KEY ("B") REFERENCES "Starship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToVehicle" ADD CONSTRAINT "_FilmToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "Film"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilmToVehicle" ADD CONSTRAINT "_FilmToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
