import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return { message: 'Welcome to NestJS API' };
  }

  @Get('genre/:genreCode')
  async getGenre(@Param('genreCode') genreCode: string) {
    return this.appService.getGenre(Number(genreCode));
  }

  @Get('content/:contentId')
  async getContent(@Param('contentId') contentId: string) {
    return this.appService.getContent(Number(contentId));
  }
}
