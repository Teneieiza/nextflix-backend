import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string } = {};

  constructor() {
    dotenv.config();
    for (const key in process.env) {
      if (process.env[key]) {
        this.envConfig[key] = process.env[key];
      }
    }
  }

  get(key: string): string {
    return this.envConfig[key] || '';
  }
}
