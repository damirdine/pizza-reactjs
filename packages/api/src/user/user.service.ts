import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      email: 'hello@me.com',
      roles: [''],
      authorizations: [],
    },
  ];
  me() {
    return {
      data: this.users[0],
    };
  }
  index() {
    return { data: this.users };
  }
  register() {
    return this.me();
  }
  login() {
    return this.me();
  }
}
