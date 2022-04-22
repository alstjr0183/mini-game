import { HeroTypes, HeroState, Event } from '../../types/fantasy/hero';

export default class Hero {
  hero: HeroState;
  setHero: any;
  constructor(hero: HeroState, setHero: any) {
    this.hero = hero;
    this.setHero = setHero;
  }
  // 영웅 방향키 조작 이벤트
  keyDownHandler = (e: Event) => {
    if (e.key === 'd') {
      this.setHero({
        ...this.hero,
        xPos: this.hero.xPos + this.hero.speed,
      });
    } else if (e.key === 'a') {
      this.setHero({
        ...this.hero,
        xPos: this.hero.xPos - this.hero.speed,
      });
    } else if (e.key === 'w') {
      this.setHero({
        ...this.hero,
        yPos: this.hero.yPos - this.hero.speed,
      });
    } else if (e.key === 's') {
      this.setHero({
        ...this.hero,
        yPos: this.hero.yPos + this.hero.speed,
      });
    }
  };
}