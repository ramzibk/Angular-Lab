import { Component } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books : Array<Book> = []

  constructor() {
    let book1 : Book = {id: "1001", volumeInfo: {title: "Book 1", authors : ["John Doe"]}}
    let book2 : Book = {id: "1002", volumeInfo: {title: "Book 2", authors : ["John Dark"]}}
    this.books.push(book1)
    this.books.push(book2)
  }

}
