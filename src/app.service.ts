import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNewData(): any {
    return { example: 'test data', test: 'data for test' };
  }
}
