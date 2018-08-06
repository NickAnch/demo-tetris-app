import { Component } from '@angular/core';
import { TetrisService } from '../../services/tetris.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {

  constructor(private tetrisService: TetrisService) { }

  public addTime(): void {
    this.tetrisService
        .addTime(new Date());
  }
}
