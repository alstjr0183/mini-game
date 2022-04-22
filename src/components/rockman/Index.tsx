import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface Size {
  width: number;
  height: number;
}

const Index = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [jump, setJump] = useState(false);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  let timer = 0;

  const keyDownHandler = (e) => {
    console.log('점프');
    // console.log(e.key);
    // if (e.key === 'Space') {
    //   setJump(true);
    // }
    setJump(true);
  };

  class Cactus {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor() {
      this.x = size.width;
      this.y = 200;
      this.width = 50;
      this.height = 50;
    }
    draw() {
      if (!ctx) return;
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  var cactus = new Cactus(); //장애물
  var cactuses: any[] = [];

  const rockman = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
      if (!ctx) return;
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },
  };

  // 이동하는 함수
  function 프레임마다실행할거() {
    requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (timer % 120 === 0) {
      var cactus = new Cactus();
      cactuses.push(cactus);
      cactus.draw();
    }
    cactuses.forEach((a, i, o) => {
      // x좌표가 0미만이면 제거
      if (a.x < 50) {
        o.splice(i, 1);
      }
      a.x--;
      a.draw();
    });

    if (jump) {
      rockman.x -= 10;
    }

    rockman.draw();
  }

  useEffect(() => {
    프레임마다실행할거();
  });

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
  }, [canvas]);

  useEffect(() => {
    if (!ctx) return;
    const draw = () => {
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255,221,0)';
      ctx.fill();
    };
  }, []);

  useEffect(() => {
    setSize({
      ...size,
      width: window.innerWidth - 100,
      height: window.innerHeight - 100,
    });
  }, []);

  useEffect(() => {
    if (!ctx) return;
    document.addEventListener('keydown', keyDownHandler);
  }, [ctx]);

  return (
    <StyledIndex>
      <canvas onKeyDown={keyDownHandler} tabIndex={0} width={size.width} height={size.height} ref={canvasRef}></canvas>
    </StyledIndex>
  );
};

const StyledIndex = styled.div``;

export default Index;
