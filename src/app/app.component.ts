import { Component } from '@angular/core';
import { APIService, PanelItem } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-virtual-scroll';
  items: Array<PanelItem> = [];
  sortOrder = false;
  filterValue = '';

  constructor(
    private apiService: APIService
  ) {
    this.fetch();
  }

  fetch() {
    this.apiService.getPanelItems().then(items => {
      this.items = items;
    })
  }

  sort() {
    // Change detection gets triggered only for new objects
    this.sortOrder = !this.sortOrder
    this.items = [...this.items.sort((x, y) => {
      const diff = (new Date(x.date) as any) - (new Date(y.date) as any)
      return this.sortOrder ? diff : -diff; 
    })];
  }

  filter(event: any) {
    event.preventDefault();
    let formData: any = Object.fromEntries(new FormData(event.target) as any);
    this.apiService.filter(formData.filter).then(items => {
      this.items = items;
    })
  }

  trackById(index: number, item: PanelItem) {
    return item.id;
  }
}
