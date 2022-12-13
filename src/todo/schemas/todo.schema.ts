import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  versionKey: false,
};

@ObjectType()
@Schema(schemaOptions)
export class Todo {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  title: string;

  @Field(() => Boolean)
  @Prop({ default: false })
  completed: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
TodoSchema.index({ title: 'text' });

export type TodoDocument = HydratedDocument<Todo>;
