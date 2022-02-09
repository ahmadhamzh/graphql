import { sequelize } from "./sequelizeInstance";
import { Model, DataTypes, Optional } from "sequelize";

interface CoffeeAttributes {
  description: string;
  name: string;
  imageUrl:string;
  id:string;
}

interface CoffeeCreationAttributes extends Optional<CoffeeAttributes, "id"> {}
export interface coffeeInstance
extends Model<CoffeeAttributes, CoffeeCreationAttributes>,
CoffeeAttributes {}

export const Coffee = sequelize.define<coffeeInstance>(
  "Coffee",
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "coffees", underscored: true }
);
