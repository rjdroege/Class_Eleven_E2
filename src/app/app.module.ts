import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { post } from './post/post.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    post
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
