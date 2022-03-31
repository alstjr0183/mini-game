import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
interface CanvasProps {
  WIDTH: number;
  HEIGHT: number;
}

interface Coordinate {
  x: number;
  y: number;
}

function RockMan({ WIDTH, HEIGHT }: CanvasProps): any {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const clearCanvas = (): void => {
    ctx?.clearRect(0, 0, WIDTH, HEIGHT);
    ctx?.beginPath();
  };

  console.log(';ddd');

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    setCanvas(canvas);
    setCtx(canvas.getContext('2d'));
    // clearCanvas();
  }, [canvasRef]);

  useEffect(() => {
    if (!ctx) return;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 800, 600);
  }, [canvas, ctx]);

  console.log(ctx);

  return (
    <Container>
      ddd
      <canvas ref={canvasRef} height={HEIGHT} width={WIDTH} className="canvas" />
    </Container>
  );
}

const Canvas = styled.canvas``;
const Container = styled.div``;

RockMan.defaultProps = {
  WIDTH: 800,
  HEIGHT: 600,
};

export default RockMan;
