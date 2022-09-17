import { CoursesModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
