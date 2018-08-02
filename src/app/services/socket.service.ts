import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  public onMessage(): Observable<any> {
    return new Observable<any>( (observer) => {
      this.socket.on('message', (message) => {
        observer.next(message);
      });
    });
  }
}
