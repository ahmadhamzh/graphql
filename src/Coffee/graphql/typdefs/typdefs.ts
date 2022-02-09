import { addCoffeeArgs,coffeeArgs, Coffeetype, deleteCoffeeArgs, updateCoffeeArgs } from "../typdefs";
import { gql } from "apollo-server";

export const typeDefs = gql`
  ${addCoffeeArgs}
  ${coffeeArgs}
  ${Coffeetype}
  ${deleteCoffeeArgs}
  ${updateCoffeeArgs}

  type Query {
    Coffees: [Coffee!]!
    Coffee(args: coffeeArgs!): Coffee
  }

  type Mutation {
    addCoffee(args: addCoffeeArgs!): Coffee!
    deleteCoffee(args: deleteCoffeeArgs!): Boolean!
    updateCoffee(args: updateCoffeeArgs!): Coffee!
  }
`
