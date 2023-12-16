import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'courses list';
  }

  @Get(':id')
  findOne(@Param() params: { id: string }) {
    return `course #${params.id}`;
  }

  @Get('outro/:id2')
  findOne2(@Param('id2') id2: string) {
    return `course #${id2}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Post('create2')
  create2(@Body('name') name) {
    return name;
  }
}
