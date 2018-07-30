import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemListService } from './item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  myItems: Item[];

  constructor(private itemListService: ItemListService) { }

  ngOnInit() {
    this.itemListService.getItemList()
      .subscribe( (data: Item[]) => this.myItems = data,
                  error => console.error(error),
                  () => console.log('My item list is loaded')
      );
  }

  totalItems(): number {
    return this.myItems.reduce( (prev , current) => prev + current.stock, 0);
  }

  getAmount(item: Item): number {
    return item.amount;
  }

  moreItems(item: Item) {

    item.amount++;
    item.stock--;
  }

  lessItems(item: Item) {

    item.amount--;
    item.stock++;

  }

  addItem(item: Item) {
    this.itemListService.addItem(item)
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe(item => this.myItems.push(item));
  }

  updateItem(item: Item) {
    this.itemListService.updateItem(item).subscribe();
  }

  deleteItem(item: Item) {
    this.itemListService.deleteItem(item.id)
      .subscribe(
        data => {
          this.myItems = this.myItems.filter( el => {return el.id !== item.id} );
        }
      );
  }


}
