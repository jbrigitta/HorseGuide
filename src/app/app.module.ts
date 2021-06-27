import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
