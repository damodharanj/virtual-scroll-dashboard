import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { VideoComponent } from './video/video.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NgxVirtualScrollModule } from '@lithiumjs/ngx-virtual-scroll';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCardComponent } from './dialog-card/dialog-card.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    VideoComponent,
    CardsListComponent,
    DialogCardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgxVirtualScrollModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
