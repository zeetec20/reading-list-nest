import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [AppService],
})
export class AppModule {}
