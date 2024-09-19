import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPostById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }

  addPost(post: any) {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: number, post: any) {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
}
