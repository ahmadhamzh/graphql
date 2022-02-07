import { coffee } from '../../models/index'

type Coffee = {
  id: string
  name: string
  description: string
  imageUrl: string
  createdAt: string
  updatedAt: string
}

 export class Coffeeservices {
 
  public async Coffees() {
    try {
      const allCoffee = await coffee.findAll({})
      return allCoffee
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async Coffee(root: any, { id }: Coffee) {
    try {
      const cfe = await coffee.findOne({ where: { id } })
      return cfe
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async addCoffee(root: any, { name, description, imageUrl }: Coffee) {
    try {
      const coffeeObj = { name, description, imageUrl }
      const createdCoffee = await coffee.create(coffeeObj)
      return createdCoffee
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
  // 

  async updateCoffee(root: any, { id, name, description, imageUrl }: Coffee) {
    try {
      const updatedCoffeeObj = { id, name, description, imageUrl }
      const CoffeeObj = await coffee.findOne({ where: { id } })
      if (CoffeeObj) {
        const responseUpdatedCoffee = await CoffeeObj.update(updatedCoffeeObj)
        return responseUpdatedCoffee
      } else {
        return `no coffee with id ${id}`
      }
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async deleteCoffee(root: any, { id }: Coffee) {
    try {
      const deleteCoffee = await coffee.destroy({ where: { id } })
      return deleteCoffee
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}

// export const coffeeservice = new Coffeeservices()