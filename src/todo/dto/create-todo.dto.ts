import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of to-do item',
  })
  title: string;

  @ApiProperty({
    description: 'Status of to-do',
    default: false,
  })
  completed: boolean;
}
