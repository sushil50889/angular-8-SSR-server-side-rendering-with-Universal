import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ArticlesComponent } from "./articles/articles.component";
import { ShowArticleComponent } from "./show-article/show-article.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { EditArticleComponent } from "./edit-article/edit-article.component";
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
} from "@angular/material";

const routes: Routes = [
  {
    path: "articles",
    component: ArticlesComponent,
    data: { title: "Articles" }
  },
  {
    path: "show-article/:id",
    component: ShowArticleComponent,
    data: { title: "Show Article" }
  },
  {
    path: "add-article",
    component: AddArticleComponent,
    data: { title: "Add Article" }
  },
  {
    path: "edit-article/:id",
    component: EditArticleComponent,
    data: { title: "Edit Article" }
  },
  { path: "", redirectTo: "/articles", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ShowArticleComponent,
    AddArticleComponent,
    EditArticleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
