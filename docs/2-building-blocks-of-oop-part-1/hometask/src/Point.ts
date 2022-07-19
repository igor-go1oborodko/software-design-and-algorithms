export class Point {
  private readonly CENTER = 0;
  public x: number;
  public y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  public distance(other: Point): number;
  public distance(x: number, y: number): number;
  public distance(xOrPointObj: number | Point, y?: number): number {
    let xDelta;
    let yDelta;
    if (typeof xOrPointObj === "object") {
      xDelta = this.x - xOrPointObj.x;
      yDelta = this.y - xOrPointObj.y;
    } else if (typeof xOrPointObj === "number" && typeof y === "number") {
      xDelta = this.x - xOrPointObj;
      yDelta = this.y - y;
    } else if (typeof xOrPointObj === "undefined" && typeof y === "undefined") {
      xDelta = this.x - this.CENTER;
      yDelta = this.y - this.CENTER;
    } else {
      throw new Error(
        "Please provide valid Point object or valid x and y coordinates"
      );
    }

    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
  }
}
