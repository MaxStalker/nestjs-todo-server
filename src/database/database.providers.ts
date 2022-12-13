import * as mongoose from 'mongoose';

export const name = 'DATABASE_CONNECTION';
export const databaseProviders = [
  {
    provide: name,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/basic'),
  },
];
