import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AddUpdateBookDto } from './dto/add-update-book.dto';
import { GetWithColumnDto } from './dto/get-with-column.dto';

@Controller('book')
export class BookController {
  
  @Get('/search-column')
  async getWithColumn(@Query() data: GetWithColumnDto) {
    
  }

  @Get('/')
  async getAll() {

  }

  @Get('/:id')
  async get(@Param('id') id) {

  }

  @Get('/search/:search')
  async search(@Param('search') search) {

  }

  @Post('/add')
  async add(@Body() data: AddUpdateBookDto) {

  }

  @Put('/update/:id')
  async update(@Param('id') id, @Body() data: AddUpdateBookDto) {

  }

  @Delete('/delete/:id')
  async delete(@Param('id') id) {
    
  }
}
