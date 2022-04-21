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
  const [check, setCheck] = useState(false);

  const { width, height } = size;

  const move = 50;

  const keyDownHandler = (e: any) => {
    setCheck(true);
    if (e.key === 'ArrowRight') {
      setxPos(xPos + move);
    } else if (e.key === 'ArrowLeft') {
      setxPos(xPos - move);
    } else if (e.key === 'ArrowUp') {
      setyPos(yPos - move);
    } else if (e.key === 'ArrowDown') {
      setyPos(yPos + move);
    }
  };

  const keyUpHandler = (e: any) => {
    setCheck(false);
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
  }, [canvas]);

  useEffect(() => {
    if (!ctx) return;

    const test = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(xPos, yPos, 30, 0, Math.PI * 2, false);
      ctx.fill();
    };

    requestAnimationFrame(test);
  }, [ctx, xPos, yPos, check]);

  useEffect(() => {
    if (!ctx) return;
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
  }, [check, ctx]);

  return (
    <StyledIndex>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
    </StyledIndex>
  );
};

const StyledIndex = styled.div``;

export default Index;
