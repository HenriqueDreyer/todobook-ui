import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistFormComponent } from './todolist-form/todolist-form.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';


const routes: Routes = [
  { path: '', component: TodolistComponent},
  { path: 'addTodo', component: TodolistFormComponent},
  { path: 'addItem', component: ItemFormComponent},
  { path: 'itens', component: ItemListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
