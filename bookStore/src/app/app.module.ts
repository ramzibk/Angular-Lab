import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducers';
import { bookCollectionReducer } from './state/collection.reducers';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({books: booksReducer, collection: bookCollectionReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
