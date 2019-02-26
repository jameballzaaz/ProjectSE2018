import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeloginAdminPage } from './homelogin-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HomeloginAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeloginAdminPage]
})
export class HomeloginAdminPageModule {}
