import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { Book } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'reading-list',
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([
      Book
    ])
  ],
  controllers: [BookController],
  providers: [AppService],
})
export class AppModule {}
