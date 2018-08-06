import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public persons = [{
    name: 'Nick Anchutin',
    profession: 'Web Developer',
    phone: '999-999-99-99',
    email: 'nick@web.com',
    site: 'www.nick.com'
  }, {
    name: 'Bob Flow',
    profession: 'Web Developer',
    phone: '999-999-99-99',
    email: 'nick@web.com',
    site: 'www.nick.com'
  }, {
    name: 'Alex Grid',
    profession: 'Web Developer',
    phone: '999-999-99-99',
    email: 'nick@web.com',
    site: 'www.nick.com'
  }, {
    name: 'Jack Node',
    profession: 'Web Developer',
    phone: '999-999-99-99',
    email: 'nick@web.com',
    site: 'www.nick.com'
  }];

  constructor() { }

}
