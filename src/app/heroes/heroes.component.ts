import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() {
    this.heroes = HEROES;
    const hero : Hero = {
    id: 123, name: "hello"
    }
    const hero1 : Hero = {
      id: 345, name: "hello1"
    }
    const hero2: Hero = {
      id: 456, name: "hello2"
    }
    this.heroes = [hero, hero1, hero2];
    this.selectedHero = hero2;
  }

}
