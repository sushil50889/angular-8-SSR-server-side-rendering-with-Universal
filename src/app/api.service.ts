import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";
import { Article } from "./article";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "/api/";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // private handleError<T>(operation = "operation", result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //   };
  // } 

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(apiUrl).pipe(
      tap(articles => console.log("fetched Articles")),
      catchError(this.handleError)
    );
  }



  getArticle(id: number): Observable<Article> {
    const url = `${apiUrl}${id}`;
    // console.log();    
    return this.http.get<Article>(url).pipe(
      tap(_ => console.log(`fetched Article id=${id}`)),
      catchError(this.handleError)
    );
  }




  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(apiUrl, article, httpOptions).pipe(
      tap((art: Article) => console.log(`added Article w/ id=${art._id}`)),
      catchError(this.handleError)
    );
  }




  updateArticle(id: any, article: Article): Observable<any> {
    const url = `${apiUrl}${id}`;
    return this.http.put(url, article, httpOptions).pipe(
      tap(_ => console.log(`updated Article id=${id}`)),
      catchError(this.handleError)
    );
  }




  deleteArticle(id: any): Observable<Article> {
    const url = `${apiUrl}${id}`;
    return this.http.delete<Article>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Article id=${id}`)),
      catchError(this.handleError)
    );
  }
}
