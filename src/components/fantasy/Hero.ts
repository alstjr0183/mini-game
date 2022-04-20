export interface Hero {
  hero: HeroTypes;
  setHero: any;
  move: number;
  e: event;
}

interface event {
  key: string;
}

interface HeroTypes {
  xPos: number;
  yPos: number;
}

// 영웅 방향키 조작 이벤트
export const keyDownHandler = ({ e, hero, setHero, move }: Hero) => {
  if (e.key === 'd') {
    setHero({
      ...hero,
      xPos: hero.xPos + move,
    });
  } else if (e.key === 'a') {
    setHero({
      ...hero,
      xPos: hero.xPos - move,
    });
  } else if (e.key === 'w') {
    setHero({
      ...hero,
      yPos: hero.yPos - move,
    });
  } else if (e.key === 's') {
    setHero({
      ...hero,
      yPos: hero.yPos + move,
    });
  }
};
