import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'client',
  imports: [],
  template: `
    <h2>Posts</h2>

    <button (click)="loadPosts()">Load Posts</button>
    @if(loading()) {
      <p>Loading...</p>
    }

    <button (click)="addPost()">Make post</button>
    @if(postCreated()) {
      <p>Post created successfully!</p>
    }

    @for (post of posts(); track post.id) {
      <div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    }
    @empty {
      <p>No posts available.</p>
    }
  `,
  styles: ``
})
export class Client {
  http = inject(HttpClient);
  loading = signal(false);
  posts = signal<Post[]>([]);
  url = 'http://localhost:3000/posts';
  postCreated = signal<boolean>(false);

  loadPosts() {
    this.loading.set(true);
    this.http.get<Post[]>(this.url)
      /* .subscribe(res => {
        this.posts.set(res);
        }); */

      // Esempio con async con caricamento ritardato
      .subscribe(async res => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un ritardo
        this.loading.set(false);
        this.posts.set(res);
      });
  }

  /* ngOnInit() {
    this.loadPosts();
  } */

  addPost() {
    const post: Post = {
      userId: 1,
      id: Math.floor(Math.random() * 1000),
      title: 'New Post',
      body: 'This is a new post created by the user.'
    };
    this.http.post<Post>(this.url, post)
      .subscribe(newPost => {
        this.posts.update(posts => [...posts, newPost]);
      });
    this.postCreated.set(true);
  }
}
