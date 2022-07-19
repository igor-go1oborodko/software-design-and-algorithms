import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(...args: [Point[]]);
  constructor(...args: [Point[], string, boolean]);
  constructor(...args: [Point[], string?, boolean?]) {
    const [points, color, filled] = args;

    if (points.length < 3) {
      throw new Error("Not enought point for a proper shape :(");
    }

    this.points = points;
    this.color = color || "green";
    this.filled = filled === undefined ? true : filled;
  }

  public getPerimeter(): number {
    const firstPointIndex = 0;
    const lastPointIndex = this.points.length - 1;
    const firstPoint = this.points[firstPointIndex];
    const lastPoint = this.points[lastPointIndex];
    let perimeter = 0;

    for (let i = 0; i < lastPointIndex; i++) {
      perimeter += this.points[i].distance(this.points[i + 1]);
    }

    perimeter += lastPoint.distance(firstPoint);

    return perimeter;
  }

  public toString(): string {
    const filledText = this.filled ? "filled" : "not filled";

    const formattedPoints = this.points
      .reduce(
        (acc: string, { x, y }: Point) => acc.concat(`(${x}, ${y}), `),
        ""
      )
      .replace(/[\,\s+]+$/, ".");

    return `A Shape with color of ${this.color} and ${filledText}. Points: ${formattedPoints}`;
  }

  public abstract getType(): string;
}
