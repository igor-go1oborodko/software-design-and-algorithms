import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  private readonly FLOATING_NUMBER_FIXED_TO;

  constructor(...args: [Point, Point, Point]);
  constructor(...args: [Point, Point, Point, string, boolean]);
  constructor(...args: [Point, Point, Point, string?, boolean?]) {
    const [point1, point2, point3, color, filled] = args;
    super([point1, point2, point3], color as string, filled as boolean);
    this.FLOATING_NUMBER_FIXED_TO = 3;
  }

  public toString(): string {
    const { x: x1, y: y1 } = this.points[0];
    const { x: x2, y: y2 } = this.points[1];
    const { x: x3, y: y3 } = this.points[2];

    return `Triangle[v1=(${x1}, ${y1}),v2=(${x2}, ${y2}),v3=(${x3}, ${y3})]`;
  }

  public getType(): string {
    const point1 = this.points[0];
    const point2 = this.points[1];
    const point3 = this.points[2];

    const aSide = Number(
      point1.distance(point2).toFixed(this.FLOATING_NUMBER_FIXED_TO)
    );
    const bSide = Number(
      point2.distance(point3).toFixed(this.FLOATING_NUMBER_FIXED_TO)
    );
    const cSide = Number(
      point3.distance(point1).toFixed(this.FLOATING_NUMBER_FIXED_TO)
    );

    if (aSide === bSide && aSide === cSide && bSide === cSide) {
      return "equilateral triangle";
    }
    if (aSide === bSide || aSide === cSide || bSide === cSide) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
