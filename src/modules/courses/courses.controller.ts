import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from 'src/modules/courses/courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  /* @Get()
  findAll(@Res() response) {
    return response.status(HttpStatus.ACCEPTED).send('courses list');
  } */

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  /* @Get(':id')
  findOne(@Param() params: { id: string }) {
    return `course #${params.id}`;
  }

  @Get('outro/:id2')
  findOne2(@Param('id2') id2: string) {
    return `course #${id2}`;
  } */

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  /* @Post()
  create(@Body() body) {
    return body;
  }

  @Post('create2')
  @HttpCode(HttpStatus.NO_CONTENT)
  create2(@Body('name') name) {
    return name;
  } */

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `updating course #${id} with data ${body}`;
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() body ) {
    return this.coursesService.update(id, body);
  }

  /* @Delete(':id')
  remove(@Param('id') id: string) {
    return `deleting course #${id}`;
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}


