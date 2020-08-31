import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/services/data/todo-data.service';
import { Todo } from 'src/app/models/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  isLoading: boolean = true;

  constructor(private todoDataService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != -1) {
      this.todoDataService.getTodo('admin', this.id).subscribe(
        data => {
          this.todo = data;
          this.isLoading = false;
        }
      )
    } else {
      this.todo = new Todo(this.id, '', false, new Date());
      this.isLoading = false;
    }


  }

  save() {
    this.todoDataService.saveTodo('admin', this.id, this.todo).subscribe(
      data => {
        this.router.navigate(['todos']);
      }
    );
  }
}
