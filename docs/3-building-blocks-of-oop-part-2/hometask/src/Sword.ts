import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  private readonly TOTAL_DAMAGE_CAP_COEFFICIENT;

  constructor(
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super("sword", value, weight, baseDamage, baseDurability);
  }

  public polish(): void {
    const maxDamage = this.baseDamage * this.TOTAL_DAMAGE_CAP_COEFFICIENT;
    const previousDamageModifier = this.damageModifier;
    const increasedDamageModifier =
      previousDamageModifier + this.MODIFIER_CHANGE_RATE;

    this.damageModifier = increasedDamageModifier;

    if (this.getDamage() > maxDamage) {
      this.damageModifier = previousDamageModifier;
    }
  }
}
