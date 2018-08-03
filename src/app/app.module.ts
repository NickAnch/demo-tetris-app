import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { TetrisService } from './services/tetris.service';
import { TetrisComponent } from './components/tetris/tetris.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';

const routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'cards',
    component: CardsComponent
  },
  { path: '**',
    redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TetrisComponent,
    HomeComponent,
    CardsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TetrisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
