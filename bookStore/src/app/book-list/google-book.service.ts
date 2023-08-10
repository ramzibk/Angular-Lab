import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Book } from './books.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleBookService {

  constructor(private http: HttpClient) {}

  getBooks() : Observable<Array<Book>> {
      return this.http.get <{ items: Book[] }> ('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks').pipe(map( (books) => books.items || [] ))
  }
}