// import { coffeeservice } from '../../services/controller'

export const resolvers = {
    Query: {
      Coffees:(parent:any, args:any, context:any)=> {
        console.log(context);        
        context.coffeeservice.Coffees},
      Coffee: (parent:any, args:any, context:any)=> context.coffeeservice.Coffee    
    },
    Mutation: {
      addCoffee: (parent:any, args:any, context:any)=> context.coffeeservice.addCoffee,    
      updateCoffee: (parent:any, args:any, context:any)=> context.coffeeservice.updateCoffee,    
      deleteCoffee: (parent:any, args:any, context:any)=> context.coffeeservice.deleteCoffee
    }
  }
  