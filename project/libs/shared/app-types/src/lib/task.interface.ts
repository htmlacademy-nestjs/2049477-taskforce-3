import { TaskStatusEnum } from "./task-status.enum";
import { Category } from './category.interface';
import { Comment } from './comment.interface';

export interface Task {
  id?: number;
  title: string;
  description: string;
  categories: Category[];
  comment: Comment[];
  price: number;
  executionPeriod: Date;
  image: string;
  address: string;
  tagSet: string;
  city: string;
  taskStatus: TaskStatusEnum;
  createdAt?: Date;
  publishAt?: Date;
}


