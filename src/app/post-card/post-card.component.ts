import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent {

}
