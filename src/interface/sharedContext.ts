import { CoffeeServices } from "../Coffee/services";

export interface SharedContext {
  services: {
    coffeeServices: CoffeeServices;
  };
}
