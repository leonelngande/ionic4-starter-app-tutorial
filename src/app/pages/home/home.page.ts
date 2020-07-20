import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  items: Array<Item>;

  constructor(public itemService: ItemService) {

    this.items = this.itemService.getItems();

  }

}
