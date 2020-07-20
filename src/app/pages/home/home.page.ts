import {Component, Inject} from '@angular/core';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  items: Array<Item>;

  constructor(
      public itemService: ItemService,
      @Inject(DOCUMENT) private document: Document,
  ) {
    this.items = this.itemService.getItems();
  }

    visitRepo() {
      this.document.location.href = 'https://github.com/leonelngande/ionic4-swipe-navigation-between-pages';
    }
}
