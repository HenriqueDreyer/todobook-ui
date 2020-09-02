import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist-service.service';
import { Todolist } from '../todolist';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList: Todolist[];
  
  constructor(private service: TodolistService) {
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => { this.todoList = data; });
  }

}
