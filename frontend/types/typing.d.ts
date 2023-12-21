type Draw = {
  ctx: CanvasRenderingContext2D;
  currentPoint: Point;
  prevPoint: Point | null;
};

type Point = { x: number; y: number };

type DrawLineProps = Draw & {
  color: string;
};

type DrawLineSocketProps = Omit<Draw & DrawLineProps, "ctx">;
