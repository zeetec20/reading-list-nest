import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { AddUpdateBookDto } from './dto/add-update-book.dto';
import { GetWithColumnDto } from './dto/get-with-column.dto';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRespository: Repository<Book>) { }
  
  getAll() {
    return this.bookRespository.find()
  }

  get(id: number) {
    return this.bookRespository.findOneOrFail(id)
  }

  getWithColumn(data: GetWithColumnDto) {
    return this.bookRespository.createQueryBuilder('book').where(`book.${data.column} = :column`, {column: data.value}).getRawMany()
  }

  async search(search: string) {
    const all = await this.bookRespository.find()
    const result = all.filter(data => {
      return (
        data.author.toLowerCase().search(search.toLowerCase()) != -1 ||
        data.name.toLowerCase().search(search.toLowerCase()) != -1 ||
        data.publisher.toLowerCase().search(search.toLowerCase()) != -1 ||
        data.publishing.toString().search(search.toLowerCase()) != -1 ||
        data.score.toString().search(search.toLowerCase()) != -1 ||
        data.status.toLowerCase().search(search.toLowerCase()) != -1 ||
        data.type.toLowerCase().search(search.toLowerCase()) != -1
      )
    })
    return result
  }

  add(data: AddUpdateBookDto) {
    const book = new Book
    book.author = data.author
    book.name = data.name
    book.publisher = data.publisher
    book.publishing = data.publishing
    book.score = data.score
    book.status = data.status
    book.type = data.type
    return this.bookRespository.save(book);
  }

  update(id: number, data: AddUpdateBookDto) {
    return this.bookRespository.update(id, {...data})
  }

  delete(id: number) {
    return this.bookRespository.delete(id)
  }
}
