import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    VideoComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
