import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Size } from '../../types/fantasy';

const Index = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  const [xPos, setxPos] = useState(10);
  const [yPos, setyPos] = useState(10);

  const { width, height } = size;

  const move = 50;

  const keyDownHandler = (e: any) => {
    console.log(e.key);
    if (e.key === 'd') {
      setxPos(xPos + move);
    } else if (e.key === 'a') {
      setxPos(xPos - move);
    } else if (e.key === 'w') {
      setyPos(yPos - move);
    } else if (e.key === 's') {
      setyPos(yPos + move);
    }
  };

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

  useEffect(() => {
    if (!ctx) return;
    const test = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(xPos, yPos, 30, 0, Math.PI * 2, false);
      ctx.fill();
    };

    requestAnimationFrame(test);
  }, [ctx, xPos, yPos]);

  return (
    <StyledIndex>
      <canvas onKeyDown={keyDownHandler} tabIndex={0} width={width} height={height} ref={canvasRef}></canvas>
    </StyledIndex>
  );
};

const StyledIndex = styled.div``;

export default Index;
