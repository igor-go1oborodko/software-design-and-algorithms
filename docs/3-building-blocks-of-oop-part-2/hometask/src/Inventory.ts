import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[];

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((a: Item, b: Item) => {
        return a.compareTo(b);
      });
    }
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public toString(): string {
    return `${this.items.join(", ")}`;
  }
}
