import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgxVirtualScrollModule } from '@lithiumjs/ngx-virtual-scroll';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    VideoComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxVirtualScrollModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
