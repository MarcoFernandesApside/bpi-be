import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Test, Test2 } from './model/test.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //test new route same controller
  @Get('/newdata')
  getNewData(): any {
    return this.appService.getNewData();
  }
  @Get('/interfaceTest')
  getInterface(): Test2 {
    const test: Test = {
      test1: 'test 1',
      test2: 123,
      test3: 'test 3',
    };

    const test2: Test2 = test;

    console.log(test2);

    return test2;
  }
}
