import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public shouldStick: boolean;

  constructor() {
    this.bingScrollEvent();
  }

  bingScrollEvent() {
    window.addEventListener('scroll', (e) => {
      if (window.pageYOffset > 0) {
        this.shouldStick = true;
      } else {
        this.shouldStick = false;
      }
    });
}

}
