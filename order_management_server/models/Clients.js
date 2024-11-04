import { DataTypes, Model } from "sequelize";
import sequelize from "../services/sequelize";


class Clients extends Model {

}

Clients.init(
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        sequelize,
        tableName: "clients",
        modelName: "Clients",
    }
);



export default Clients;
