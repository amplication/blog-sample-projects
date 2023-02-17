import { load } from "cheerio";
import { writeFileSync } from "fs";
import fetch from "isomorphic-unfetch";
import { URL } from "node:url";

(async () => {
  const stop =
    "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)";
  let url = stop;
  const pokedex: any[] = [];

  /**
   * Returns what generation a Pokemon belongs to based on their Pokedex number.
   * @param num Pokedex number
   * @returns number
   */
  const calculateGeneration = (num: number): number => {
    if (num <= 151) return 1;
    if (num <= 251) return 2;
    if (num <= 386) return 3;
    if (num <= 493) return 4;
    if (num <= 649) return 5;
    if (num <= 721) return 6;
    if (num <= 809) return 7;
    if (num <= 905) return 8;
    if (num <= 1008) return 9;
    return 0;
  };

  do {
    const response = await fetch(url);
    const body = await response.text();
    const $ = load(body);

    // Grab name of Pokemon and remove "(Pokémon)" from string
    const name = $("#firstHeading").text().replace(" (Pokémon)", "");

    // Get Pokedex number of Pokemon and convert into a number
    const dexNumber = parseInt(
      $('big > a[title="List of Pokémon by National Pokédex number"] > span')
        .text()
        .replace("#", "")
    );

    // Get Pokemon's picture
    const image = "https:" + $('a[href*="/wiki/File:"] > img').attr("src");

    // Rip Pokemon's biology
    let biologyStart = $("h2 > #Biology").parent().next();

    const biology: string[] = [];

    while (!biologyStart.is("h2")) {
      biology.push(biologyStart.text());
      biologyStart = biologyStart.next();
    }

    // Get Pokemon's typings and clean data
    const types = $(
      "#mw-content-text > div > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > a[title*=type] b"
    ).toArray();

    const typing = Array.from(
      new Set(
        types
          .map((e) => ((e.children[0] as any).data as string).toUpperCase())
          .filter((e) => e !== "UNKNOWN")
      )
    );

    // Create Pokemon object and push into Pokedex
    const pokemon = {
      biology: biology.join("").trim(),
      dexNumber,
      generation: calculateGeneration(dexNumber),
      image,
      name,
      typing,
      url,
    };

    pokedex.push(pokemon);

    // Set next Pokemon's URL
    url = new URL(
      $(
        '#mw-content-text > div > table > tbody > tr > td > table > tbody > tr > td[style="text-align: left"] > a'
      ).attr("href") as string,
      "https://bulbapedia.bulbagarden.net"
    ).toString();
  } while (url !== stop);

  writeFileSync("./data/pokedex.json", JSON.stringify(pokedex, null, "\t"));
})();
