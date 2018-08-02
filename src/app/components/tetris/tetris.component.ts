import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent implements AfterViewInit {
  @ViewChild('tetrisCanvas') public myCanvas: ElementRef;
  public ctx: CanvasRenderingContext2D;

  constructor(private socketService: SocketService) { }

  ngAfterViewInit(): void {
    this.ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement)
      .getContext('2d');
    this.ctx.scale(20, 20);
  }

  public startSocket(): void {
    this.socketService.onMessage()
        .subscribe((msg) => {
          this.drawFigure(msg.figureShape, msg.figureColor);
        });
  }

  public drawFigure(figureShape: number[][], figureColor: string): void {
    this.clearCanvasField();
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
