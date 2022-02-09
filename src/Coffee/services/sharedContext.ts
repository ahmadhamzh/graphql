import { CoffeeServices } from "./coffeeServices";
import { SharedContext } from "../../interface";

export const context = (): SharedContext => {
  const coffeeServices  = new CoffeeServices();
  return { services: { coffeeServices } };
};
