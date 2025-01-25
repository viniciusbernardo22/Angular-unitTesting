import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';
import { Post } from '../interfaces/post';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let postMock: Post = {
    title: 'postTitle',
    body: 'postBody',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    fixture.componentRef.setInput('post', postMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post title', () => {
    const title = fixture.nativeElement.querySelector('.post-title');
    expect(title.textContent).toContain(postMock.title);
  });
  it('should display post body', () => {
    const title = fixture.nativeElement.querySelector('.post-body');
    expect(title.textContent).toContain(postMock.body);
  });
});
