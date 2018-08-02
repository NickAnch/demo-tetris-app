import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent implements OnInit, AfterViewInit {

  @ViewChild('tetrisCanvas') myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;
  public figureColor: string;
  public figureShape: number[][];
  public alpha = 0;

  constructor(private _socketService: SocketService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement)
                                                .getContext('2d');
    this.ctx.scale(20, 20);
  }

  public startSocket(): void {
    this._socketService.onMessage()
      .subscribe((msg) => {
        this.figureColor = msg.figureColor;
        this.figureShape = msg.figureShape;
        this.drawFigure(this.figureShape, this.figureColor);
      });
  }

  public drawFigure(figureShape: number[][], figureColor: string): void {
    this.clearCanvasField();
    this.ctx.fillStyle = 'purple';
    figureShape.forEach((row, y) => {
      y += 3;
      row.forEach((value, x) => {
        if (value !== 0) {
            this.ctx.fillStyle = figureColor;
            this.ctx.fillRect(x += 9, y, 1, 1);
        }
      });
    });
  }

  public clearCanvasField(): void {
    this.ctx.clearRect(0, 0, 400, 200);
  }

}
