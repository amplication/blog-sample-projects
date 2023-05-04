import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { Configuration, OpenAIApi } from "openai";
import allData from "./data.json";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getDescription(name: string): Promise<any> {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 1000,
    prompt: `Give me a summary about "${name}" from Star Wars.`,
  });

  return completion.data.choices[0].text;
}

function generateId(key: string): string {
  return crypto.createHash('md5').update(key).digest('hex');
}

export async function customSeed() {
  const client = new PrismaClient();
  const keys = Object.keys(allData).filter(k => /\d\/$/.test(k));

  // Seed Data
  for (const key of keys) {
    const data: { [key: string]: any } = (allData as any)[key];
    const id = generateId(key);
    const description = await getDescription(data.name || data.title);

    // Seed People
    if (key.includes('people')) {
      const person = {
        id,
        name: data.name,
        height: parseInt(data.height) || 0,
        mass: parseFloat(data.mass) || 0,
        hairColor: data.hair_color,
        skinColor: data.skin_color,
        eyeColor: data.eye_color,
        birthYear: data.birth_year,
        gender: data.gender,
        description
      };

      await client.person.upsert({
        where: { id },
        update: person,
        create: person,
      });
    }

    // Seed Starships
    if (key.includes('starships')) {
      const starship = {
        id,
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer.split(', '),
        costInCredits: parseFloat(data.cost_in_credits) || 0,
        length: parseFloat(data.length) || 0,
        maxAtmospheringSpeed: parseInt(data.max_atmosphering_speed) || 0,
        crew: data.crew,
        passengers: data.passengers,
        cargoCapacity: parseFloat(data.cargo_capacity) || 0,
        consumables: data.consumables,
        hyperdriveRating: parseFloat(data.hyperdrive_rating) || 0,
        mglt: parseInt(data.MGLT) || 0,
        starshipClass: data.starship_class,
        description
      };

      await client.starship.upsert({
        where: { id },
        update: starship,
        create: starship,
      });
    }

    // Seed Vehicles
    if (key.includes('vehicles')) {
      const vehicle = {
        id,
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer.split(', '),
        costInCredits: parseFloat(data.cost_in_credits) || 0,
        length: parseFloat(data.length) || 0,
        maxAtmospheringSpeed: parseInt(data.max_atmosphering_speed) || 0,
        crew: data.crew,
        passengers: data.passengers,
        cargoCapacity: parseFloat(data.cargo_capacity) || 0,
        consumables: data.consumables,
        vehicleClass: data.vehicle_class,
        description
      };

      await client.vehicle.upsert({
        where: { id },
        update: vehicle,
        create: vehicle,
      });
    }

    // Seed Races
    if (key.includes('species')) {
      const race = {
        id,
        name: data.name,
        classification: data.classification,
        designation: data.designation,
        averageHeight: parseFloat(data.average_height) || 0,
        averageLifespan: parseInt(data.average_lifespan) || 0,
        skinColors: data.skin_colors.split(', '),
        hairColors: data.hair_colors.split(', '),
        eyeColors: data.eye_colors.split(', '),
        language: data.language,
        description
      };

      await client.race.upsert({
        where: { id },
        update: race,
        create: race,
      });
    }

    // Seed Planets
    if (key.includes('planets')) {
      const planet = {
        id,
        name: data.name,
        diameter: parseInt(data.diameter) || 0,
        rotationPeriod: parseInt(data.rotation_period) || 0,
        orbitalPeriod: parseInt(data.orbital_period) || 0,
        gravity: data.gravity,
        population: parseFloat(data.population) || 0,
        surfaceWater: parseFloat(data.surface_water) || 0,
        climates: data.climate.split(', '),
        terrains: data.terrain.split(', '),
        description
      };

      await client.planet.upsert({
        where: { id },
        update: planet,
        create: planet,
      });
    }

    // Seed Films
    if (key.includes('films')) {
      const film = {
        id,
        title: data.title,
        episodeId: data.episode_id,
        openingCrawl: data.opening_crawl,
        director: data.director,
        producers: data.producer.split(', '),
        releaseDate: new Date(data.release_date),
        description
      };

      await client.film.upsert({
        where: { id },
        update: film,
        create: film,
      });
    }
  }

  // Add relations
  for (const key of keys) {
    const data: { [key: string]: any } = (allData as any)[key];
    const id = generateId(key);

    // People's Relations
    if (key.includes('people')) {
      await client.person.update({
        where: { id },
        data: {
          planet: {
            connect: {
              id: generateId(data.homeworld)
            }
          },
          races: {
            connect: data.species.map((s: string) => ({
              id: generateId(s)
            }))
          },
          vehicles: {
            connect: data.vehicles.map((v: string) => ({
              id: generateId(v)
            }))
          },
          starships: {
            connect: data.starships.map((s: string) => ({
              id: generateId(s)
            }))
          }
        }
      });
    }

    // Films' Relations
    if (key.includes('films')) {
      await client.film.update({
        where: { id },
        data: {
          planet: {
            connect: data.planets.map((v: string) => ({
              id: generateId(v)
            }))
          },
          race: {
            connect: data.species.map((s: string) => ({
              id: generateId(s)
            }))
          },
          vehicle: {
            connect: data.vehicles.map((v: string) => ({
              id: generateId(v)
            }))
          },
          starship: {
            connect: data.starships.map((s: string) => ({
              id: generateId(s)
            }))
          }
        }
      });
    }

  }

  client.$disconnect();
}
