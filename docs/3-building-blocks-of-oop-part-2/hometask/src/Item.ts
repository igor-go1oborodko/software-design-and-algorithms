import { Comparable } from "./Comparable";

let id = 0;

export abstract class Item implements Comparable<Item> {
  protected _value: number;
  protected _name: string;
  protected _weight: number;

  constructor(name: string, value: number, weight: number) {
    this._name = name;
    this._value = value;
    this._weight = weight;
    id++;
  }

  public get weight() {
    return this._weight;
  }

  public get name() {
    return this._name;
  }

  public get value() {
    return this._value;
  }

  public set weight(val: number) {
    this._weight = val;
  }

  public set name(val: string) {
    this._name = val;
  }

  public set value(val: number) {
    this._value = val;
  }

  public compareTo(other: Item): number {
    const { value, name } = other;
    const otherNameUpperCased = name.toUpperCase();
    const instanceNameUpperCased = this.name.toUpperCase();

    if (this.value > value) {
      return 1;
    } else if (this.value < value) {
      return -1;
    } else {
      if (instanceNameUpperCased > otherNameUpperCased) {
        return 1;
      } else if (instanceNameUpperCased < otherNameUpperCased) {
        return -1;
      }
    }

    return 0;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  public use(): string {
    return `You're using the${this.name}`;
  }

  public static numberOfItems(): number {
    return id;
  }

  public static reset(): void {
    id = 0;
  }
}
