import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    // new Todo(1, 'description - 1', false, new Date()),
    // new Todo(2, 'description - 2', false, new Date()),
    // new Todo(3, 'description - 3', false, new Date()),

  ]

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.todoDataService.fetchAllTodos("admin").subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

}
