import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService} from '../service/user.service'

describe('AppController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

      userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "lista de usuarios"', () => {
      expect(userController.getHello()).toBe('lista de usuarios');
    });
  });
});
