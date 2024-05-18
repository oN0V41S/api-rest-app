
// Importando Decoratos
import { Module } from '@nestjs/common';

// Importando Serviços e Controladores 
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

// Importando ORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project])
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
