import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create(createTodoDto);
  }

  findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  findOne(id: string) {
    return this.todoModel.findById(id).exec();
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  remove(id: string) {
    return this.todoModel.findByIdAndRemove(id);
  }
}
