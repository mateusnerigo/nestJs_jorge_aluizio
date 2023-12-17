import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './modules/courses/courses.controller';
import { CourseService } from './services/course/course.service';
import { CoursesService } from './modules/courses/courses.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService, CoursesService],
})
export class AppModule {}
