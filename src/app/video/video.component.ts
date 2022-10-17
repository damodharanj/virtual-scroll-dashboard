import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit, OnDestroy {

  @ViewChild('target', {static: true}) target: ElementRef | null = null;
  player: object | null = null;

  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
        src: string,
    }[],
  } = {
    fluid: true,
    aspectRatio: '30:10',
    autoplay: true,
    sources: [{
      src: 'https://www.w3schools.com/tags/movie.mp4',
    }]
  };


  constructor() { }

  ngAfterViewInit(): void {
    if (this.target) {
      this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
        console.log('onPlayerReady', this);
      });
    }
  }

  ngOnDestroy() {

  }

}
