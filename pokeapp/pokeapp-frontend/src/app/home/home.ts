import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  goPokedex(url: string) {
    window.location.href = url;
  }

  goPokedle(url: string) {
    window.location.href = url;
  }

  goTeams(url: string) {
    window.location.href = url;
  }
}
