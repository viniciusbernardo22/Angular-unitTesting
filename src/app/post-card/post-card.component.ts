import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  standalone: true
})
export class PostCardComponent {
  readonly post = input.required<Post>();
}
