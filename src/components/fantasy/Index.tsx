import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../types/fantasy';
import { Event, HeroTypes } from '../../types/fantasy/hero';
import Hero from './Hero';
import magic from '../../images/fantasy/magic.png';
import { keyDownHandler, keyUpHandler } from './Setting';

const Index = () => {
  // -----------------state------------------------
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestAnimationRef = useRef(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  const [setting, setSetting] = useState({
    keyState: {
      right: false,
      left: false,
      top: false,
      down: false,
    },
  });
  // 영웅 state
  const [skill, setSkill] = useState({
    start: true,
    speed: 20,
    xPos: 0,
    yPos: 0,
    size: 20,
  });
  const [hero, setHero] = useState({
    speed: 0.1,
    xPos: 800,
    yPos: 800,
    level: 1,
    damage: 10,
    experience: 0,
  });
  // 몬스터 state
  const [monster, setMonster] = useState({
    hp: 10000,
    speed: 1,
    xPos: 100,
    yPos: 100,
  });

  const { width, height } = size;
  const heroClass = new Hero(hero, setHero);

  // 따라 가는 로직
  const f_follow = (first: number, second: number, speed: number): number => {
    if (first < second) {
      // 따라 가는 대상의 좌표가 더 낮다면?
      return second - speed;
    } else {
      // 따라 가는 대상의 좌표가 더 크다면?
      return second + speed;
    }
  };

  // 근처에 왔는지 감지 로직
  const f_nearApproach = (firstX: number, firstY: number, secondX: number, secondY: number, interval: number) => {
    return Math.abs(firstX - secondX) < interval && Math.abs(firstY - secondY) < interval ? true : false;
  };

  // 캔버스 생성
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

  const draw = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const heroImg = new Image();
    const monsterImg = new Image();
    heroImg.src = '/magic.png';
    monsterImg.src = '/monster.png';

    // 영웅 로직
    ctx.drawImage(heroImg, hero.xPos, hero.yPos, 100, 100);

    // 몬스터 로직
    ctx.drawImage(monsterImg, monster.xPos, monster.yPos, 100, 100);
    setMonster((prevmonster) => ({
      ...prevmonster,
      xPos: f_follow(hero.xPos, monster.xPos, monster.speed),
      yPos: f_follow(hero.yPos, monster.yPos, monster.speed),
    }));
    ctx.fillText(String(monster.hp), monster.xPos, monster.yPos);

    // 스킬 로직
    if (skill.start) {
      setSkill((prevSkill) => ({
        ...prevSkill,
        start: false,
        xPos: hero.xPos,
        yPos: hero.yPos,
        size: 15,
      }));
    }
    ctx.beginPath();
    ctx.arc(skill.xPos, skill.yPos, skill.size, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(255,221,0)';
    ctx.fill();
    ctx.closePath();
    if (!skill.start) {
      setSkill((prevSkill) => ({
        ...prevSkill,
        xPos: f_follow(monster.xPos, skill.xPos, skill.speed),
        yPos: f_follow(monster.yPos, skill.yPos, skill.speed),
      }));
    }

    if (f_nearApproach(monster.xPos, monster.yPos, skill.xPos, skill.yPos, 100)) {
      // 몬스터 체력 깎음
      setMonster((prevmonster) => ({
        ...prevmonster,
        hp: prevmonster.hp - hero.damage,
      }));
      setSkill((prevSkill) => ({
        ...prevSkill,
        start: true,
        size: 0,
      }));
    }
  };

  // 캔버스 애니메이션
  useEffect(() => {
    if (!ctx) return;
    requestAnimationRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  }, [draw]);

  useEffect(() => {
    window.addEventListener(
      'keydown',
      (e) => {
        keyDownHandler(e, setting, setSetting);
      },
      true,
    );
    window.addEventListener(
      'keyup',
      (e) => {
        keyUpHandler(e, setting, setSetting);
      },
      true,
    );
  }, []);

  useEffect(() => {
    heroClass.keyDownHandler(setting);
  }, [heroClass.keyDownHandler]);

  return (
    <StyledIndex>
      <canvas
        // onKeyDown={(e) => {
        //   heroClass.keyDownHandler(setting);
        // }}
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
