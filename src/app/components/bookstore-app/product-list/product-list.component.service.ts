import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()
export class BookService{
    private url = 'http://localhost:3333/api/bookstore';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'aplication/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){

        return this.http.get(this.url);
    }
}