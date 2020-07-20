import { Injectable } from '@angular/core';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<Item> = [
    {
      id: 1,
      title: 'Example 1',
      description: 'description 1',
      image: '/assets/shapes.svg',
    },
    {
      id: 2,
      title: 'Example 2',
      description: 'description 2',
      image: '/assets/shapes.svg',
    },
    {
      id: 3,
      title: 'Example 3',
      description: 'description 3',
      image: '/assets/shapes.svg',
    },
    {
      id: 4,
      title: 'Example 4',
      description: 'description 4',
      image: '/assets/shapes.svg',
    },
    {
      id: 5,
      title: 'Need a more complex app?',
      description: 'Let\'s talk!',
      image: '/assets/shapes.svg',
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
