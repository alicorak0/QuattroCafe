import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-main-menu-component',
  templateUrl: './main-menu-component.html',
  styleUrls: ['./main-menu-component.css']
})




export class MainMenuComponent implements AfterViewInit {

  @ViewChild('bgVideo')
  bgVideo!: ElementRef<HTMLVideoElement>;


  ngAfterViewInit() {

    // VIDEO PLAY (senin kodun)
    const vid = this.bgVideo.nativeElement;
    vid.muted = true;

    const tryPlay = () => {
      vid.play().catch(() => {
        setTimeout(() => vid.play(), 300);
      });
    };

    if (vid.readyState >= 2) {
      tryPlay();
    } else {
      vid.onloadeddata = tryPlay;
    }


    

    // document.body.appendChild(script);

    
  }



}
