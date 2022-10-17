import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export type Rating = 1 | 2 | 3 | 4 | 5

export interface PanelItem {
  id: string
  name: string
  gender: string
  session: string
  age: string
  date: Date
  easeOfUse: Rating
  satisfaction: Rating
  usefullness: Rating
  preference: Rating
  title: string
  summary: string
  keywords: [string]
}

function getRating(): Rating {
  return faker.datatype.number({
    min: 1,
    max: 5
  }) as Rating
}

export function generatePanelItem(): PanelItem {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    gender: faker.name.gender(),
    age: faker.datatype.number({
      min: 18,
      max: 54
    }) + '',
    session: faker.datatype.number() + '',
    date: faker.date.future(),
    easeOfUse: getRating(),
    satisfaction: getRating(),
    usefullness: getRating(),
    preference: getRating(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.sentences(),
    keywords: faker.datatype.array(3) as any
  }
}

@Injectable({
  providedIn: 'root'
})
export class APIService {

  itemsCount = 1000;
  items: Array<PanelItem> = [];

  constructor() { }

  getPanelItems(reFetch = false): Promise<Array<PanelItem>> {
    if (reFetch || this.items.length == 0) {
      for (let i=0; i<this.itemsCount; i++) {
        this.items.push(generatePanelItem())
      }
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.items);
      }, 1000)
    })
  }

  filter(value: string): Promise<Array<PanelItem>> {
    return new Promise((resolve) => {
      resolve(this.items.filter(x => x.name.includes(value)));
    })
  }
}
