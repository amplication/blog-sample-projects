// NestJS controller that returns a HTML page with an image element and a caption when a user visits the root path of the server.
import { Controller, Get, Render } from '@nestjs/common';
import { SealService } from './seal/seal.service';

@Controller()
export class HomeController {
  constructor(private seal: SealService) {}

  @Get()
  @Render('index.hbs')
  async root() {
    return this.seal.getSeal();
  }
}