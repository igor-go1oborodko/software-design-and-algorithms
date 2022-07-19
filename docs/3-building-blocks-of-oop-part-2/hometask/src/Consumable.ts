import { Item } from "./Item";

export class Consumable extends Item {
  protected _consumed: boolean;
  protected _spoiled: boolean;

  constructor(
    name?: string,
    value?: number,
    weight?: number,
    spoiled?: boolean
  ) {
    super(name as string, value as number, weight as number);
    this.consumed = false;
    this.spoiled = spoiled as boolean;
  }

  public set consumed(val: boolean) {
    this._consumed = val;
  }

  public set spoiled(val: boolean) {
    this._spoiled = val;
  }

  public isConsumed() {
    return this._consumed;
  }

  public isSpoiled() {
    return this._spoiled;
  }

  public eat(): string {
    return `You eat the ${this.name}.`;
  }

  public use(): string {
    if (this.spoiled) {
      return `You eat the ${this.name}.
      You feel sick.`;
    } else if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`;
    }

    return this.eat();
  }
}
