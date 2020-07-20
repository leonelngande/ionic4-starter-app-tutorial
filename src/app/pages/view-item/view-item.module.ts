import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewItemPage } from './view-item.page';
import {SwipeModule} from '../../swipe/swipe.module';

const routes: Routes = [
  {
    path: '',
    component: ViewItemPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SwipeModule
    ],
  declarations: [ViewItemPage]
})
export class ViewItemPageModule {}
