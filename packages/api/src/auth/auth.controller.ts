import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get()
  index() {
    return { hello: 'world' };
  }
}
