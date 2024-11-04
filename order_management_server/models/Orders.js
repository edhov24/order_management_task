import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize";
import Clients from "../models/Clients";

class Orders extends Model {

}

Orders.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        order_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        tableName: "orders",
        modelName: "orders",
    }
);

Clients.belongsToMany(Orders, { through: 'ClientOrders',  timestamps: false, foreignKey: 'client_id' });

Orders.belongsToMany(Clients, { through: 'ClientOrders',   timestamps: false,foreignKey: 'order_id' });

export default Orders;
