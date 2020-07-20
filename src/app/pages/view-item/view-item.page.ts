import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../../services/item.service';
import {NavController} from '@ionic/angular';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {

  item: Item;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(Number(data.id));
        console.log({item: this.item});
        // if item is undefined, go back to home
        if (!this.item) {
          this.goBack();
        }
      }
    );
  }

  goBack() {
    this.navCtrl.navigateBack(['/home']);
  }

  onSwipeLeft($event) {
    const previousItem = this.itemService.getPreviousItem(this.item.id);
    if (previousItem) {
      this.navCtrl.navigateBack(['/', 'items', previousItem.id]);
    } else {
      // If no previous item return to the list of items
      this.goBack();
    }
  }

  onSwipeRight($event) {
    const nextItem = this.itemService.getNextItem(this.item.id);
    if (nextItem) {
      this.navCtrl.navigateForward(['/', 'items', nextItem.id]);
    }
  }
}
