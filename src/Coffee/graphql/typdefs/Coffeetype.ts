import { gql } from "apollo-server";

export const Coffeetype = gql`
type Coffee {
    id: String
    name: String
    description: String
    createdAt: String
    updatedAt: String
    imageUrl: String
   }
`
