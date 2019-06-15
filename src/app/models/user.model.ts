import {Post} from '@blog-app/models/post.model';

export interface User {
  _id: string;
  username: string;
  age: number;
  gender: Gender;
  created: Date;
  token?: string;
  posts?: Post[];
  bookmarks?: Post[];
}
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  TRANGENDER = 'Transgender',
}
