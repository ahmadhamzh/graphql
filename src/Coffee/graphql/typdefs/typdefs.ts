import {  gql } from 'apollo-server'
import { Coffeetype } from './Coffeetype'
import { coffee } from './args/coffee'
import { addCoffee } from './args/addCoffee'
import { updateCoffee } from './args/updateCoffee'
import { deleteCoffee } from './args/deleteCoffee'

export const typeDefs = gql`
${Coffeetype}
type Query{
 Coffees : [Coffee] ,
 ${coffee}
}
type Mutation{
 ${addCoffee},
 ${updateCoffee},
 ${deleteCoffee}
}`