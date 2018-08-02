import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

const URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class TetrisService {

  constructor( private http: HttpClient ) { }

  public addTime(time): Subscription {
    const urlTimer = `${URL}/timers`;
    return this.http.post(urlTimer, { time: time })
                    .subscribe( (res) => console.log(res) );
  }
}
