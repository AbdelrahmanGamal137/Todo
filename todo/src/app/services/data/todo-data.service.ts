import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private apiUrl: string = "http://localhost:8082/users";

  constructor(private http: HttpClient) { }

  fetchAllTodos(userName) {
    return this.http.get<Todo[]>(`${this.apiUrl}/${userName}/todos`);
  }

  deleteTodo(userName, id) {
    return this.http.delete(`${this.apiUrl}/${userName}/todos/${id}`);
  }

  getTodo(userName,id){
    return this.http.get<Todo>(`${this.apiUrl}/${userName}/todos/${id}`);
  }

  saveTodo(userName,id,todo){
    return this.http.put<Todo>(`${this.apiUrl}/${userName}/todos/${id}`,todo);
  }
}
