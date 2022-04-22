export interface HeroTypes {
  hero: HeroState;
  setHero: any;
  speed: number;
  e: Event;
}

export interface Event {
  key: string;
}

export interface HeroState {
  speed: number;
  xPos: number;
  yPos: number;
}
