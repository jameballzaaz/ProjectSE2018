import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './home/home.module#HomePageModule'},
  {path: 'list', loadChildren: './list/list.module#ListPageModule'},
  {path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  {path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'login-admin', loadChildren: './login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'singup', loadChildren: './singup/singup.module#SingupPageModule' },
  { path: 'homelogin', loadChildren: './homelogin/homelogin.module#HomeloginPageModule' },
  { path: 'homelogin-admin', loadChildren: './homelogin-admin/homelogin-admin.module#HomeloginAdminPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
