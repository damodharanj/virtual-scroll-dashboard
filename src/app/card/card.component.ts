import { Component, Input, OnInit } from '@angular/core';
import type {PanelItem, Rating} from '../apiservice.service';
import { generatePanelItem } from '../apiservice.service';

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

  constructor() { }

  @Input() item: PanelItem = {} as any;

  ngOnInit(): void {}

  getClass(value: Rating): string {
    return ratingToClass[value];
  }

}
