import { Component, signal } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';
import { Post } from './interfaces/post';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent, PostFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  posts = signal<Post[]>([
    {
      title: 'How to Learn Angular',
      body: 'Angular is a powerful framework for building dynamic web applications. This guide will help you get started.',
    },
    {
      title: 'Understanding TypeScript',
      body: 'TypeScript is a typed superset of JavaScript that makes coding easier and more reliable. Dive in to learn the basics.',
    },
    {
      title: 'CSS Tips for Beginners',
      body: 'Want to make your websites look stunning? These CSS tips will help you design like a pro.',
    },
  ]);

  addPost(post: Post){
    this.posts.update((current) => [...current, post])
  }
}
