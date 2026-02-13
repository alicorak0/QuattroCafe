import { AfterViewInit, Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-menu-component',
  imports: [],
  templateUrl: './main-menu-component.html',
  styleUrl: './main-menu-component.css',
  encapsulation: ViewEncapsulation.None
})

export class MainMenuComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

ngAfterViewInit() {
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

}
}
