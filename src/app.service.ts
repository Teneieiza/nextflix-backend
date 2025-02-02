import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from './config/config.service';
import { GenreType } from './type/genre.type';
import { ContentType } from './type/content.type';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async getGenre(genreCode: number): Promise<GenreType> {
    const options = {
      method: 'GET',
      url: `https://${this.configService.get('XRAPIDAPIHOST')}/genre`,
      params: { genrecode: genreCode },
      headers: {
        'x-rapidapi-key': this.configService.get('XRAPIDAPIKEY'),
        'x-rapidapi-host': this.configService.get('XRAPIDAPIHOST'),
      },
    };

    const response = await axios.request<GenreType>(options);
    return response.data;
  }

  async getContent(contentId: number): Promise<ContentType> {
    const options = {
      method: 'GET',
      url: `https://${this.configService.get('XRAPIDAPIHOST')}/content`,
      params: { contentId: contentId },
      headers: {
        'x-rapidapi-key': this.configService.get('XRAPIDAPIKEY'),
        'x-rapidapi-host': this.configService.get('XRAPIDAPIHOST'),
      },
    };

    const response = await axios.request<ContentType>(options);
    return response.data;
  }
}
