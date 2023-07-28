import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class GeneralService{

  getGeneral(): number  {
    return 3
  }
}
