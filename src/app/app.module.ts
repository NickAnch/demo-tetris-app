import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { TetrisService } from './services/tetris.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TetrisComponent } from './components/tetris/tetris.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TetrisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TetrisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
