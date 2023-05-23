import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SealServiceBase } from "./base/seal.service.base";

@Injectable()
export class SealService extends SealServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getSeal() {
    // Calculate today's date at midnight
    const today = getToday();
    // Query the database for seals with today's date
    const seals = await this.findMany({where: {date: today}});
    // Get the first seal with today's date
    const seal = seals.shift();

    // If the seal exists, return it
    if (seal) {
      return seal;
    } else {
      // If the seal doesn't exist get it from flickr, save it to the database, and return it
      const flickrSeal = await fetchPictureOfSeal();
      return this.create({data: {date: today, ...flickrSeal}});
    }
  }
}

/**
 * Fetch a picture of a seal a walrus or a sea lion from flickr
 */
async function fetchPictureOfSeal(): Promise<{image: string, caption: string}> {
  const response = await fetch('https://api.flickr.com/services/feeds/photos_public.gne?tags=seal,walrus,sea-lion&tagmode=all&format=json&nojsoncallback=true');
  const body = await response.json();
  const i = Math.floor(Math.random() * body.items.length);

  return { image: body.items[i].media.m, caption: body.items[i].title };
}

/**
 * Creates a date object for today but sets the time to be exactly 00:00:00
 */
function getToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}
