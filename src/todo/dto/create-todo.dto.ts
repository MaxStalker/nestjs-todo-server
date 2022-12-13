import { ApiProperty } from '@nestjs/swagger';
import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType()
export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of to-do item',
  })
  @Field()
  title: string;

  @ApiProperty({
    description: 'Status of to-do',
    default: false,
  })
  @Field()
  completed: boolean;
}
