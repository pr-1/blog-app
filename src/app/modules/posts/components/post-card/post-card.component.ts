import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '@blog-app/models/post.model';

@Component({
  selector: 'blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<string> = new EventEmitter<string>();

  delete() {
    this.deletePost.emit(this.post._id);
  }
}
