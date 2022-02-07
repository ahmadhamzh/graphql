import {Sequelize, DataType}  from "sequelize-typescript"
export const Coffee = (sequelize:Sequelize, DataTypes:typeof DataType) => {
    const coffeeModule = sequelize.define('Coffee', {
        name: { type: DataTypes.STRING, allowNull: false, unique : true},
        description: { type: DataTypes.STRING, allowNull: false },
        imageUrl: { type: DataTypes.STRING, allowNull: false },       
    })
    return coffeeModule
}
