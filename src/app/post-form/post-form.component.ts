import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  get formTitle() {
    return this.form.get('title')?.value;
  }
  get formBody() {
    return this.form.get('body')?.value;
  }

  submitForm = output<Post>();

  form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    body: new FormControl('', { nonNullable: true }),
  });

  onSubmit() {
    if (!this.formTitle || !this.formBody) return;

    this.submitForm.emit(this.form.getRawValue());
    this.form.reset();
  }
}
