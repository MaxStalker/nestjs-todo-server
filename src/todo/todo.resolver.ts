import { Resolver } from '@nestjs/graphql';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { Query } from '@nestjs/graphql';

@Resolver((of) => CreateTodoDto)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => CreateTodoDto)
  async todo() {
    return this.todoService.findAll();
  }
}
