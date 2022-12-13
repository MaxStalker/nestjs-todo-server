import { connection, Connection } from 'mongoose';
import { TodoSchema } from './schemas/todo.schema';
import { name as databaseProvider } from '../database/database.providers';

export const name = 'TODO_MODEL';
export const todoProviders = [
  {
    provide: name,
    useFactory: (connection: Connection) =>
      connection.model('Todo', TodoSchema),
    inject: [databaseProvider],
  },
];
