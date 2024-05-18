import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { UserService } from '../service/user.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  userService = new UserService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUser(@Res() res: Response): void {
    const users = this.userService.getUsers();
    res.json(users);
  }
}
