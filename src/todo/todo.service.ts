import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create(createTodoDto);
  }

  async findAll(skip = 0, limit = 10, search?: string) {
    const filters: FilterQuery<TodoDocument> = {};

    if (search) {
      filters.$text = {
        $search: search,
      };
    }

    return this.todoModel.find(filters).sort({ _id: -1 }).skip(skip);

    // This is solution to return number of items in the collection
    /*
    const results = await query;
    const count = await this.todoModel.count();

    return { results, count };
     */
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
