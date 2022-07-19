import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  private readonly DURABILITY_CAP = 1;

  constructor(
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super("bow", value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const previousDurabilityModifier = this.durabilityModifier;
    const increasedDurabilityModifier =
      previousDurabilityModifier + this.MODIFIER_CHANGE_RATE;

    this.durabilityModifier = increasedDurabilityModifier;

    if (this.getDurability() > this.DURABILITY_CAP) {
      this.durabilityModifier = previousDurabilityModifier;
    }
  }
}
