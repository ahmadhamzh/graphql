import { gql } from "apollo-server";

export const Coffeetype = gql`
type Coffee {
    createdAt: String
    description: String
    id: String
    imageUrl: String
    name: String
    updatedAt: String
   }
`
