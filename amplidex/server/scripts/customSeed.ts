import { Generation, PrismaClient, Typing } from "@prisma/client";
import pokedex from "../data/pokedex.json";

export async function customSeed() {
  const client = new PrismaClient();

  // Load Pokemon Generations
  const generationsInserted: Generation[] = [];
  const generations = Array.from(
    new Set(
      pokedex.reduce(
        (acc: string[], cur) => [...acc, `Generation ${cur.generation}`],
        []
      )
    )
  );

  for (const generation of generations) {
    const result = await client.generation.upsert({
      where: { name: generation },
      update: { name: generation },
      create: { name: generation },
    });
    generationsInserted.push(result);
  }

  // Load Pokemon Typings
  const typingsInserted: Typing[] = [];
  const typings = Array.from(
    new Set(pokedex.reduce((acc: string[], cur) => [...acc, ...cur.typing], []))
  );

  for (const typing of typings) {
    const result = await client.typing.upsert({
      where: { name: typing },
      update: { name: typing },
      create: { name: typing },
    });
    typingsInserted.push(result);
  }

  // Load Pokemon
  const getGeneration = (gen: number): string => {
    for (const generation of generationsInserted) {
      if (generation.name === `Generation ${gen}`) return generation.id;
    }
    return "";
  };

  const getTyping = (type: string): string => {
    for (const typing of typingsInserted) {
      if (typing.name === type) return typing.id;
    }
    return "";
  };

  for (const pokemon of pokedex) {
    await client.monster.upsert({
      where: { name: pokemon.name },
      update: { name: pokemon.name },
      create: {
        biology: pokemon.biology,
        dexNumber: pokemon.dexNumber,
        generation: {
          connect: {
            id: getGeneration(pokemon.generation),
          },
        },
        image: pokemon.image,
        name: pokemon.name,
        url: pokemon.url,
        typing: {
          connect: pokemon.typing.map((t: string) => ({
            id: getTyping(t),
          })),
        },
      },
    });
  }

  client.$disconnect();
}
