import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itens: Item[];

  constructor(private service: ItemService) {     
  }

  ngOnInit(): void {
    this.service.listAll().subscribe(data => {
      this.itens = data;
    })
  }

}
