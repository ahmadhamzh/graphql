import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "ahmad", "12345", {
  dialect: "postgres",
});
