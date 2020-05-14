import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { RatingStarComponent } from './rating-star/rating-star.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    RatingStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
