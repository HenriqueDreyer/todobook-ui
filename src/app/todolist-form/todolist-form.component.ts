import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodolistService } from '../todolist-service.service';
import { Todolist } from '../todolist';

@Component({
  selector: 'app-todolist-form',
  templateUrl: './todolist-form.component.html',
  styleUrls: ['./todolist-form.component.css']
})
export class TodolistFormComponent implements OnInit {

  todolist: Todolist;

  constructor(private route: ActivatedRoute, private router: Router, private service: TodolistService) {
    this.todolist = new Todolist();    
  }

  onSubmit() {
    this.service.save(this.todolist).subscribe(data => this.gotoTodolist());
  }

  gotoTodolist() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
