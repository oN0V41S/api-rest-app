import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    const users = [
      {
        name: 'Rafael',
      },
      {
        name: 'Julia',
      },
    ];
    return users;
  }
}
