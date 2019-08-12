import {Component, OnInit} from '@angular/core';
import {BlogState} from '@blog-modules/core/reducers/index.reducer';
import {Store} from '@ngrx/store';
import {SetLoginUser} from '@blog-modules/core/actions/index.action';
import {Post} from '@blog-app/models/post.model';
import {Gender} from '@blog-app/models/user.model';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog-app';
  constructor(private store: Store<BlogState>) {}
  ngOnInit() {
    const user = {
      _id: 'dshvbfcjk',
    username: 'dhgvc',
    age: 12,
    gender: Gender.MALE,
    created: new Date(),
    token: 'hdscbvghsd',
    posts: [],
    bookmarks: []
    };
    this.store.dispatch(new SetLoginUser(user));
  }
}
