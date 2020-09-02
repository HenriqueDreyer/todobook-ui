import { LocationChangeEvent } from '@angular/common';
import { Item } from './item';

export class Todolist {
    id: number;
    title: string;
    itens: Item[];    
}
