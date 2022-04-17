import { disconnect } from 'process';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
interface CanvasSize {
  WIDTH: number;
  HEIGHT: number;
}

function RockMan(): any {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState<CanvasSize>({
    WIDTH: 0,
    HEIGHT: 0,
  });

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

  class Cactus {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor() {
      this.x = size.WIDTH;
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
  var timer = 0;

  // 이동하는 함수
  function 프레임마다실행할거() {
    requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight);

    if (timer % 140 === 0) {
      var cactus = new Cactus();
      cactuses.push(cactus);
      cactus.draw();
    }
    cactuses.forEach((a) => {
      a.x--;
      a.draw();
    });

    rockman.draw();
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
  }, []);

  useEffect(() => {
    프레임마다실행할거();
    cactus.draw();
  }, [canvas, ctx]);

  useEffect(() => {
    setSize({
      ...size,
      WIDTH: window.innerWidth,
      HEIGHT: window.innerHeight,
    });
  }, []);

  return (
    <Container>
      <canvas ref={canvasRef} width={size.WIDTH} height={size.HEIGHT}></canvas>
    </Container>
  );
}

const Container = styled.div``;

export default RockMan;
