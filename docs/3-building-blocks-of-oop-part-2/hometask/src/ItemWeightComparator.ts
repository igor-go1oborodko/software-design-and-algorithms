import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item) {
    const { weight: firstItemWeight } = first;
    const { weight: secondItemWeight } = second;

    if (firstItemWeight > secondItemWeight) {
      return 1;
    } else if (firstItemWeight < secondItemWeight) {
      return -1;
    }

    return first.compareTo(second);
  }
}
