import { Todolist } from './todolist';

export class Item {
    id: number;
    todoList: Todolist;
    title: string;
    description: string;
    active: boolean;
}