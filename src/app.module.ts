// Importando Decorators ( Anotação para Variáveis, classes e etc. )
import { Module } from '@nestjs/common';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';

// ORM
import { TypeOrmModule} from '@nestjs/typeorm';
import { Project } from './projects/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'sqlite',
      database: ':memory:',
      entities: [Project],
      synchronize: true
    }),
    ProjectsModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
