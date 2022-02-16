import { IsNotEmpty } from "class-validator"

export class GetWithColumnDto {
  @IsNotEmpty()
  column: string

  @IsNotEmpty()
  value: string
}