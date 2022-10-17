import { Component, Input, OnInit } from '@angular/core';
import type {PanelItem, Rating} from '../apiservice.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

const ratingToClass = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five'
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  @Input() item: PanelItem = {} as any;

  @Input() playVideo = false;

  ngOnInit(): void {}

  getClass(value: Rating): string {
    return ratingToClass[value];
  }

  showDialog() {
    this.dialog.open(DialogCardComponent, {
      data: {item: this.item, playVideo: this.playVideo},
      panelClass: 'custom-dialog-container',
    });
  }

}
