import {Component, Input} from '@angular/core';
import {Post} from '@blog-app/models/post.model';

@Component({
  selector: 'blog-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post: Post;
}
