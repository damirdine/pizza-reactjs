import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  index() {
    return this.userService.index();
  }

  @Get('/me')
  me() {
    return this.userService.me();
  }

  @Post('/register')
  register() {
    return this.userService.register();
  }

  @Post('/login')
  login() {
    return this.userService.login();
  }
}
