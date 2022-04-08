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

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
  }, []);

  useEffect(() => {
    if (!ctx) return;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 200, 200);
  }, [canvas, ctx]);

  useEffect(() => {
    setSize({
      ...size,
      WIDTH: window.innerWidth,
      HEIGHT: window.innerHeight,
    });
  }, []);

  const rockman = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
  };

  return (
    <Container>
      <canvas ref={canvasRef} width={size.WIDTH} height={size.HEIGHT}></canvas>
    </Container>
  );
}

const Container = styled.div``;

export default RockMan;
