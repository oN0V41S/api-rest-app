// Importando Decoradores
import { Injectable } from '@nestjs/common';

// Define o Container de serviços como injetável
@Injectable()
export class AppService {

  // Exemplo de Injeção de serviço
  // construct(private servico1: Servico1()){}
  getHello(): string {
    return '<h1>Hello Mundo!</h1>';
  }
}
