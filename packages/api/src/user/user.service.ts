import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  me() {
    return {
      data: {
        email: 'hello@me.com',
        roles: [''],
        authorizations: [],
      },
    };
  }
}
