import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMobileAlt, faEnvelope, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { TetrisService } from './services/tetris.service';
import { TetrisComponent } from './components/tetris/tetris.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

library.add( faMobileAlt, faEnvelope, faGlobeAmericas );
library.add( faTwitter, faFacebookF, faInstagram, faPinterest );

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
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TetrisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
