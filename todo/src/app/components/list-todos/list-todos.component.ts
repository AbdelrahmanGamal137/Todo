import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = []
  message: string;

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.fetchAllTodos("admin").subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo('admin', id).subscribe(
      response => {
        this.refreshTodos();
        this.message = "Delete Todo Succsess!";
      }
    );
  }

  saveTodo(id: number) {
    this.router.navigate(['todos', id]);
  }

}
