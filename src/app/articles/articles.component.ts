import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Article } from "../article";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ["title", "author"];
  data: Article[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getArticles().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}




// # angular-8-SSR-server-side-rendering-with-Universal
// Angular 8 Universal Server-side Rendering (SSR)
