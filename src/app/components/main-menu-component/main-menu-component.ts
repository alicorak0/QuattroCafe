import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare global {
  interface Window { instgrm: any }
}


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

    // ✅ INSTAGRAM SCRIPT LOAD
    // const script = document.createElement('script');
    // script.src = 'https://www.instagram.com/embed.js';
    // script.async = true;

    // script.onload = () => {
    //   const ig = (window as any).instgrm;
    //   if (ig) {
    //     ig.Embeds.process();
    //   }
    // };


      setTimeout(() => {
      if (window['instgrm']) {
        window['instgrm'].Embeds.process();
      }
    }, 300);

    

    // document.body.appendChild(script);

    
  }



}
