import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';
import { Post } from '../interfaces/post';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  let postMock: Post = {
    title: 'Post Title',
    body: 'Post Body',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should input title', () => {
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = postMock.title;
    title.dispatchEvent(new Event('input'));
    expect(component.formTitle).toContain(postMock.title);
  });

  it('should input body', () => {
    const title = fixture.nativeElement.querySelector('textarea[name="body"]');
    title.value = postMock.body;
    title.dispatchEvent(new Event('input'));
    expect(component.formBody).toContain(postMock.body);
  });

  it('should submit form', () => {
    spyOn(component.submitForm, 'emit');
    const title = fixture.nativeElement.querySelector('input[name="title"]');
    title.value = postMock.title;
    title.dispatchEvent(new Event('input'));

    const body = fixture.nativeElement.querySelector('textarea[name="body"]');
    body.value = postMock.body;
    body.dispatchEvent(new Event('input'));

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.submitForm.emit).toHaveBeenCalledWith(postMock);
  });
});
