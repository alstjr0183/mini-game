import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../types/fantasy';
import { Hero, keyDownHandler } from './Hero';
import magic from '../../images/fantasy/magic.png';

const Index = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const [hero, setHero] = useState({
    xPos: 0,
    yPos: 0,
  });

  const [monster, setMonster] = useState({
    xPos: 0,
    yPos: 0,
  });

  // const [xPos, setxPos] = useState(10);
  // const [yPos, setyPos] = useState(10);

  const { width, height } = size;

  const move = 50;

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
  }, []);

  // setInterval(() => {
  //   const heroX = hero.xPos / 100;
  //   const heroY = hero.yPos / 100;
  //   setMonster({
  //     ...monster,
  //     xPos: monster.xPos + heroX,
  //     yPos: monster.yPos + heroY,
  //   });
  // }, 1000);

  console.log(monster);

  useEffect(() => {
    if (!ctx) return;
    const test = () => {
      ctx.clearRect(0, 0, width, height);

      const heroImg = new Image();
      const monsterImg = new Image();
      heroImg.src = '/magic.png';
      monsterImg.src = '/monster.png';
      ctx.drawImage(heroImg, hero.xPos, hero.yPos, 100, 100);
      ctx.drawImage(monsterImg, monster.xPos, monster.yPos, 100, 100);
    };

    requestAnimationFrame(test);
  }, [ctx, hero.xPos, hero.yPos, monster]);

  const f_tt = () => {
    const heroX = hero.xPos / 10;
    const heroY = hero.yPos / 10;
    setMonster({
      ...monster,
      xPos: monster.xPos + heroX,
      yPos: monster.yPos + heroY,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const heroX = hero.xPos / 5;
      const heroY = hero.yPos / 5;

      const monsterX = hero.xPos < monster.xPos ? monster.xPos - heroX : monster.xPos + heroX;
      const monsterY = hero.yPos < monster.yPos ? monster.yPos - heroY : monster.yPos + heroY;
      setMonster((prevmonster) => ({
        ...prevmonster,
        xPos: monsterX,
        yPos: monsterY,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [monster]);

  // setInterval(f_tt, 1000);

  return (
    <StyledIndex>
      <canvas
        onKeyDown={(e) => {
          const t: Hero = { e: e, hero: hero, setHero: setHero, move: move };
          keyDownHandler(t);
        }}
        tabIndex={0}
        width={width}
        height={height}
        ref={canvasRef}
      ></canvas>
    </StyledIndex>
  );
};

const StyledIndex = styled.div``;

export default Index;
