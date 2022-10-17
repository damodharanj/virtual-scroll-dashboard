import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('target', {static: true}) target: ElementRef | null = null;
  player: object | null = null;

  @Input() videourl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'

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
      src: this.videourl,
    }]
  };


  constructor() {}

  ngOnInit() {
    this.options.sources[0].src = this.videourl;
  }

  ngAfterViewInit(): void {
    if (this.target) {
      this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
        // player rendered
      });
    }
  }

  ngOnDestroy() {

  }

}
