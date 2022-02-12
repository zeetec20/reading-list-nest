import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {
  
  @Get('/search-column')
  async getWithColumn() {
    
  }

  @Get('/')
  async getAll() {

  }

  @Get('/:id')
  async get() {

  }

  @Get('/search/:search')
  async search() {

  }

  @Post('/add')
  async add() {

  }

  @Put('/update/:id')
  async update() {

  }

  @Delete('/delete/:id')
  async delete() {
    
  }
}
