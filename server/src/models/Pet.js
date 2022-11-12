const Sequelize = require("sequelize");
const dataBase = require("../config/sequelize");

const Pet = dataBase.define("pets", {
    id: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
    },
    age: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: true,
    },
    type: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
    },
    breed: {
        type: Sequelize.DataTypes.STRING(255),

    },
    id_owner: {
        type: Sequelize.DataTypes.INTEGER,

    },
    created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: dataBase.literal("NOW()"),

    },
    updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: dataBase.literal("NOW()"),
    },

},
    {
        underscored: true,
        timestamps: false,
        freezeTableName: true,

    })

module.exports = Pet