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
  const [jump, setJump] = useState(false);
  const [size, setSize] = useState<CanvasSize>({
    WIDTH: 0,
    HEIGHT: 0,
  });

  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

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

  // onKeyDown handler function
  // const keyDownHandler = (event: React.KeyboardEvent<HTMLCanvasElement>) => {
  //   console.log(event.code);
  //   if (event.code === 'Space') {
  //     setJump(true);
  //   }
  // };
  const keyDownHandler = (e: Event) => {
    console.log('점프');
    // console.log(e.key);
    // if (e.key === 'Space') {
    //   setJump(true);
    // }
    setJump(true);
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'object') return;
  //   document.addEventListener('keydown', function (e) {
  //     console.log('d?');
  //     if (e.key === 'Space') {
  //       setJump(true);
  //       console.log('뛴다!');
  //     }
  //   });
  // }, []);

  useEffect(() => {
    프레임마다실행할거();
    cactus.draw();
  }, [canvas, ctx]);

  useEffect(() => {
    setSize({
      ...size,
      WIDTH: window.innerWidth - 100,
      HEIGHT: window.innerHeight - 100,
    });
  }, []);

  return (
    <Container>
      <canvas
        ref={canvasRef}
        width={size.WIDTH}
        height={size.HEIGHT}
        tabIndex={0}
        onKeyUp={keyDownHandler}
        // onClick={keyDownHandler}
      ></canvas>
    </Container>
  );
}

const Container = styled.div``;

export default RockMan;
