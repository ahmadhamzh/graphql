import { Coffee, coffeeInstance, sequelize } from "../../models/";

export class CoffeeServices {
  async fetchAllCoffees(): Promise<coffeeInstance[]> {
    try {
      return await Coffee.findAll({
        order: [sequelize.fn("max", sequelize.col("created_at"))],
      });
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async fetchOneCoffee(id: string): Promise<coffeeInstance | null> {
    try {
     return await Coffee.findOne({ where: { id } }); 
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async addCoffee(name: string, description: string, imageUrl: string) {
    try {
      const coffeeObj = { name, description, imageUrl };
      return await Coffee.create(coffeeObj);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async updateCoffee(
    id: string,
    name: string,
    description: string,
    imageUrl: string
  ): Promise<coffeeInstance> {
    try {
      const updatedCoffee = { name, description, imageUrl };
      const CoffeeObj = await Coffee.findOne({ where: { id } });

      if (CoffeeObj) {
        return await CoffeeObj.update(updatedCoffee);        
      }
      throw new Error(`Coffee dosen't exist with id ${id}`);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async deleteCoffee(id: string): Promise<boolean> {
    try {
      return !!await Coffee.destroy({ where: { id } });      
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
