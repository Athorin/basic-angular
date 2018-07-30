import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListService } from './item-list/item-list.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'shop', component: ItemListComponent },
// { path: 'login', component: LoginComponent },
// { path: 'dashboard', component: DashboardComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})

export class AppModule { }
