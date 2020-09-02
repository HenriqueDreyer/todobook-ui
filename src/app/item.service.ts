import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from './item';
import { Todolist } from './todolist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl: string;

  constructor(private http: HttpClient) { 
    this.itemUrl = 'http://127.0.0.1:8080/item';
  }

  public findAll(todoList: Todolist): Observable<Item[]>{
    let url = this.itemUrl.concat("/todolist/"+todoList.id);
    return this.http.get<Item[]>(url);
  }

  public listAll(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemUrl);
  }

  public save(item: Item) {
    return this.http.post<Item>(this.itemUrl, item);
  }

  public update(item: Item){
    let url = this.itemUrl.concat("/"+item.id);
    return this.http.put<Item>(url, item);
  }

  public delete(item: Item){
    let url = this.itemUrl.concat("/"+item.id);
    return this.http.delete<Item>(this.itemUrl)
  }
}
