import { IsDateString, IsNotEmpty, IsNumber } from "class-validator"

export class AddUpdateBookDto {
  @IsNotEmpty()
  type: string

  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  status: string

  @IsNumber()
  score: number
  
  @IsNotEmpty()
  author: string

  @IsNotEmpty()
  publisher: string
  
  @IsNotEmpty()
  @IsDateString()
  publishing: Date
}