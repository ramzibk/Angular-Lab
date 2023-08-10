import { Component, Input } from '@angular/core';
import { Book } from '../book-list/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent {

  @Input()
  books: Array<Book> = [];

  ngOnInit() {
    let book1 : Book = {id: "001", volumeInfo: {title: "book1", authors: ["Ryan James"]}};
    this.books.push(book1);
  }
}
