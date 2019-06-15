import {User} from '@blog-app/models/user.model';

export interface Post {
  _id: string;
  title: string;
  description: string;
  created: Date;
  updated: Date;
  author: User;
  votes: number;
}
