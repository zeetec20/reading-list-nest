import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { AddUpdateBookDto } from './dto/add-update-book.dto';
import { GetWithColumnDto } from './dto/get-with-column.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  
  @Get('/search-column')
  async getWithColumn(@Query() data: GetWithColumnDto) {
    return {
      'data': await this.bookService.getWithColumn(data)
    }
  }

  @Get('/')
  async getAll() {
    return {
      'data': await this.bookService.getAll()
    }
  }

  @Get('/:id')
  async get(@Param('id') id) {
    return {
      'data': await this.bookService.get(id)
    }
  }

  @Get('/search/:search')
  async search(@Param('search') search) {
    return {
      'data': await this.bookService.search(search)
    }
  }

  @Post('/add')
  async add(@Body() data: AddUpdateBookDto) {
    return {
      'data': await this.bookService.add(data)
    }
  }

  @Put('/update/:id')
  async update(@Param('id') id, @Body() data: AddUpdateBookDto) {
    return {
      'data': await this.bookService.update(id, data)
    }
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id) {
    return {
      'data': await this.bookService.delete(id)
    }
  }
}
