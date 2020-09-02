import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todolist } from './todolist';
import { Observable } from 'rxjs';

@Injectable()
  export class TodolistService {
 
    private todoListUrl: string;
   
    constructor(private http: HttpClient) {
      this.todoListUrl = 'http://127.0.0.1:8080';
    }
   
    public findAll(): Observable<Todolist[]> {
      return this.http.get<Todolist[]>(this.todoListUrl);
    }
   
    public save(todoList: Todolist) {
      return this.http.post<Todolist>(this.todoListUrl, todoList);
    }

    public update(id: number, todoList: Todolist){
      let putUrl = this.todoListUrl.concat("/" + id);
      return this.http.put<Todolist>(putUrl, todoList);
    }
  }