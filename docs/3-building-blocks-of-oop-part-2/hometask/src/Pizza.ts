import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private _numberOfSlices;
  private _slicesEaten;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super(undefined, undefined, undefined, spoiled);
    this._numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    if (this._slicesEaten < this._numberOfSlices) {
      this._slicesEaten++;

      if (this._slicesEaten >= this._numberOfSlices) {
        this.consumed = true;
      }

      return "You eat a slice of the pizza";
    } else {
      return "";
    }
  }
}
