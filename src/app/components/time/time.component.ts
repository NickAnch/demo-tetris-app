import { Component, OnInit } from '@angular/core';
import { TetrisService } from '../../services/tetris.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  public time: Date;

  constructor(private _tetrisService: TetrisService) { }

  ngOnInit() {
  }

  public updateTime() {
    this.time = new Date();
  }

  public addTime(): void {
    this.updateTime();
    this._tetrisService
        .addTime(this.time);
  }
}
