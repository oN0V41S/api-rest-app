import { AppService } from '../service/app.service';
import { UserService } from '../service/user.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    userService: UserService;
    getHello(): string;
    getUser(res: Response): void;
}
