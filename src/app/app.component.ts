import { Component } from '@angular/core';
import { APIService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-virtual-scroll';
  items: Array<any> = [];

  constructor(
    private apiService: APIService
  ) {
    this.apiService.getPanelItems().then(items => {
      this.items = items;
    })
  }
}
