// Importando Decorators ( Decoradores de Var e etc..)  
import { Controller, Get } from '@nestjs/common';

// Importando Serviços
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
