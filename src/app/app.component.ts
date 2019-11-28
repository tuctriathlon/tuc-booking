import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tuc-booking';
  menuItems: {name: string, route: string[]}[];

  constructor() {
    this.menuItems = [];
    this.menuItems.push({name: 'Home', route: ['']});
    this.menuItems.push({name: 'Users', route: ['users']});
    this.menuItems.push({name: 'User', route: ['user']});
    this.menuItems.push({name: 'Transport', route: ['transport']});
    this.menuItems.push({name: 'Rooms', route: ['rooms']});
    this.menuItems.push({name: 'Admin', route: ['admin']});
  }
}
