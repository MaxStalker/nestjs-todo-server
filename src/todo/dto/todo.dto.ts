import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}
