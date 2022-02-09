import { addInterface, deleteInterface, SharedContext,updateInterface } from "../../../interface";
import { coffeeInstance } from "../../../models";

export const resolvers = {
  Query: {
    Coffees: async (
      _parent: any, //<============
      _args: any, //<============
      { services: { coffeeServices } }: SharedContext
    ): Promise<coffeeInstance[]> => {
      try {
        return await coffeeServices.fetchAllCoffees();
      } catch (error) {
        throw new Error(`${error}`);
      }
    },

    Coffee: async (
      _parent: any, //<============
      { args: { id } }: deleteInterface,
      { services: { coffeeServices } }: SharedContext
    ): Promise<coffeeInstance | null> => {
      try {
        return await coffeeServices.fetchOneCoffee(id);
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  },

  Mutation: {
    addCoffee: async (
      _parent: any, //<============
      { args: { name, description, imageUrl } }: addInterface,
      { services: { coffeeServices } }: SharedContext
    ): Promise<coffeeInstance> => {
      try {
        return await coffeeServices.addCoffee(description, imageUrl, name);
      } catch (error) {
        throw new Error(`${error}`);
      }
    },

    deleteCoffee: async (
      _parent: any, //<============
      { args: { id } }: deleteInterface,
      { services: { coffeeServices } }: SharedContext
    ): Promise<boolean> => {
      try {
        return await coffeeServices.deleteCoffee(id);
      } catch (error) {
        throw new Error(`${error}`);
      }
    },
  },

  updateCoffee: async (
    _parent: any, //<============
    { args: { description, id, imageUrl, name } }: updateInterface,
    { services: { coffeeServices } }: SharedContext
  ): Promise<coffeeInstance> => {
    try {
      return await coffeeServices.updateCoffee(description, id, imageUrl, name);
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};
