import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export type Rating = 1 | 2 | 3 | 4 | 5

export interface PanelItem {
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

  constructor() { }

  getPanelItems(): Promise<Array<PanelItem>> {
    const items: Array<PanelItem> = [];
    for (let i=0; i<this.itemsCount; i++) {
      items.push(generatePanelItem())
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(items);
      }, 1000)
    })
  }
}
