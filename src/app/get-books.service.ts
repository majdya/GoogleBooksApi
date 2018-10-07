import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';
// import 'rxjs/Rx';
// import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient) { }


  getBooks(name: string): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.url + name);
  }

  // getBooksMap(name: string): Observable<Array<Book>> {
  //   return this.http.get<Array<Book>>(this.url + name);
  // }
}
