import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBookService } from './book-list/google-book.service';
import { Book } from './book-list/books.model';
import { Observable } from 'rxjs';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookStore';

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private bookService: GoogleBookService, private store: Store) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books) => this.store.dispatch(BooksApiActions.retrievedBookList({books})))
    console.log("Books = "+this.books$)
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}))
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}))
  }
}
