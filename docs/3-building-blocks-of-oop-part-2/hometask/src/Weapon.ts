import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected readonly MODIFIER_CHANGE_RATE: number = 0.05;
  protected baseDamage: number;
  protected damageModifier: number;
  protected baseDurability: number;
  protected durabilityModifier: number;

  private getUseItemMessage(willItemBreakAfterUse: boolean): string {
    const useItemBaseMessage = `You use the ${
      this.name
    }, dealing ${this.getDamage().toFixed(2)} points of damage.`;

    if (willItemBreakAfterUse) {
      return useItemBaseMessage + " The hammer breaks.";
    } else {
      return useItemBaseMessage;
    }
  }

  private decreaseDamageModifier(): void {
    this.durabilityModifier =
      this.durabilityModifier - this.MODIFIER_CHANGE_RATE;
  }

  constructor(
    name: string,
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}%`;
  }

  public use(): string {
    if (this.getDurability() < 0) {
      return `You can't use the ${this.name}, it is broken.`;
    } else {
      this.decreaseDamageModifier();
      return this.getUseItemMessage(this.getDurability() < 0);
    }
  }
}
