import { Component } from '@angular/core';
import { GoogleBookService } from './book-list/google-book.service';
import { Book } from './book-list/books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookStore';

  books:  Book[] = [];

  constructor(private bookService: GoogleBookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books) => this.books = books)
      console.log("Books = "+this.books)
  }
}
