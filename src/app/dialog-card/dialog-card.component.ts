import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PanelItem } from '../apiservice.service';



@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {item: PanelItem, playVideo: boolean}) { }

  ngOnInit(): void {
  }

}
