import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private router: Router, private service: ItemService) {
    this.item = new Item();
   }

   onSubmit() {
    this.service.save(this.item).subscribe(result => this.gotoItemList());
  }

  gotoItemList(){
    this.router.navigate(['/item']);
  }

  ngOnInit(): void {
  }

}
