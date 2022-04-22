import { HeroTypes, HeroState, Event } from '../../types/fantasy/hero';

export default class Hero {
  hero: HeroState;
  setHero: any;
  constructor(hero: HeroState, setHero: any) {
    this.hero = hero;
    this.setHero = setHero;
  }
  // 영웅 방향키 조작 이벤트
  keyDownHandler = (setting: any = []) => {
    // const { keyState } = setting;

    if (setting.keyState.right) {
      this.setHero({
        ...this.hero,
        xPos: this.hero.xPos + this.hero.speed,
      });
    } else if (setting.keyState.left) {
      this.setHero({
        ...this.hero,
        xPos: this.hero.xPos - this.hero.speed,
      });
    } else if (setting.keyState.top) {
      this.setHero({
        ...this.hero,
        yPos: this.hero.yPos - this.hero.speed,
      });
    } else if (setting.keyState.down) {
      this.setHero({
        ...this.hero,
        yPos: this.hero.yPos + this.hero.speed,
      });
    }
    // setTimeout(() => {
    //   this.keyDownHandler(setting);
    // }, 100);
  };
}
