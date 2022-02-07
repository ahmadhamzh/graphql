import {Coffee} from'./Coffee';
import { Sequelize, DataTypes } from 'sequelize';

export const sequelize:any = new Sequelize('postgres', 'ahmad', '12345', {
    dialect: 'postgres'
  })

export const coffee = Coffee(sequelize, DataTypes)



