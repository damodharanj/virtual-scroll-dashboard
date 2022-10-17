import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

const videoURLs = [
  'https://www.w3schools.com/tags/movie.mp4',
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
  'https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
  'https://ia600209.us.archive.org/20/items/ElephantsDream/ed_hd.ogv'
];

export type Rating = 1 | 2 | 3 | 4 | 5

export type Message = {
  user: string
  message: string
  time: string
}

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
  messages: Array<Message>
  videoURL: string
}

function getRating(): Rating {
  return faker.datatype.number({
    min: 1,
    max: 5
  }) as Rating
}

function generateMessages(count = 10): Array<Message> {
  const messages: Array<Message> = [];
  for (let i=0; i<count; i++) {
    messages.push({
      message: faker.lorem.sentence(),
      user: faker.name.firstName(),
      time: faker.datatype.datetime() + ''
    })
  }
  return messages;
}

export function generatePanelItem(): PanelItem {
  console.log(faker.helpers.arrayElement(videoURLs));
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
    keywords: faker.datatype.array(3) as any,
    messages: generateMessages(),
    videoURL: faker.helpers.arrayElement(videoURLs)
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
      resolve(this.items.filter(x => {
        return x.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      }));
    })
  }
}
