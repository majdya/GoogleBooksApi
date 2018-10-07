import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../get-books.service';
import { Book } from '../book'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  public addEnabeld: boolean = false;
  public isPresent: boolean;
  public hasThumb: boolean;
  public booksArr = [];
  private size: number = 0;
  private selectedBook: Book;
  private i: number;

  constructor(private booksService: BooksService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  enableAdd() {
    this.addEnabeld = true;
  }

  onSearch(name: string) {
    this.booksArr = [];
    this.booksService.getBooks(name)
      .subscribe(data => {
        this.booksArr = data;
        this.fetchIntoArray();
      },
        (error) => console.log(error)
      );
  }

  onclick(book: Book) {
    console.log(book.id);
  }

  private fetchIntoArray() {
    this.booksArr = this.booksArr["items"];
    this.size = this.booksArr.length;
    for (this.i = 0; this.i < this.size; this.i++) {
      if (this.booksArr[this.i] !== undefined) {
        this.booksArr[this.i]["id"] = this.i;
        this.booksArr[this.i]["authors"] = this.booksArr[this.i]["volumeInfo"]["authors"];
        this.booksArr[this.i]["publishedDate"] = this.booksArr[this.i]["volumeInfo"]["publishedDate"];
        this.booksArr[this.i]["title"] = this.booksArr[this.i]["volumeInfo"]["title"];
        if (this.booksArr[this.i]["volumeInfo"]["imageLinks"] !== undefined) {
          this.hasThumb=true;
          this.booksArr[this.i]["thumb"] = this.booksArr[this.i]["volumeInfo"]["imageLinks"]["thumbnail"];
        }
      }
    }
    console.log(this.size);
  }

  onEdit(editedTitle, editedPBdate, editedAuthors) {
    this.isPresent = this.booksArr.some(function (el) { return el.title === editedTitle });
    console.log(this.isPresent);
    if (!this.isPresent) {
      const book: Book = { id: this.selectedBook.id, authors: editedAuthors, publishedDate: editedPBdate, title: editedTitle, thumb: "" };
      this.booksArr[this.selectedBook.id-1] = book;
      console.log(book);
    }
    else{
      console.log(editedTitle+" already exsist!! ")
    }
    console.log(this.size);
    this.fetchIntoArray();
  }

  onAdd(newTitle, newPBdate, newAuthors) {
    this.isPresent = this.booksArr.some(function (el) { return el.title === newTitle });
    console.log(this.isPresent);
    if (!this.isPresent) {
      const book: Book = { id: this.size, authors: newAuthors, publishedDate: newPBdate, title: newTitle, thumb: "" };
      this.booksArr[this.size] = book;
      console.log(book);
      this.size += 1;
    }
    console.log(this.size);
  }

  currentBook(book: Book) {
    this.selectedBook = book;
    console.log("current book: " + this.selectedBook.id);
  }

  onDelete() {
    console.log("book: " + this.selectedBook.id + " Deleted!");
    this.booksArr = this.booksArr.filter(book => book !== this.selectedBook);
    this.size -= 1;
    console.log(this.booksArr);
  }

}
