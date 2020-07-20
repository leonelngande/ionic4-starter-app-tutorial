import { Injectable } from '@angular/core';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<Item> = [
    {
      id: 1,
      title: 'Item 1',
      description: 'description 1',
      image: 'assets/shapes.svg',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'description 2',
      image: 'assets/shapes.svg',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'description 3',
      image: 'assets/shapes.svg',
    },
    {
      id: 4,
      title: 'Item 4',
      description: 'description 4',
      image: 'assets/shapes.svg',
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Last list item, description 5',
      image: 'assets/shapes.svg',
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItemById(id: Item['id']) {
    console.log({id});
    return this.items.find(item => item.id === id);
  }

  getIndexById(id: Item['id']) {
    return this.items.findIndex(item => item.id === id);
  }

  getPreviousItem(currentItemId: Item['id']) {
    const currentIndex = this.getIndexById(currentItemId);
    return this.items[currentIndex - 1] || null;
  }

  getNextItem(currentItemId: Item['id']) {
    const currentIndex = this.getIndexById(currentItemId);
    return this.items[currentIndex + 1] || null;
  }
}
