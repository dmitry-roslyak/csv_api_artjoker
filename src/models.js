const Sequelize = require("sequelize").Sequelize;
const DataTypes = require("sequelize").DataTypes;
const Model = require("sequelize").Model;

let sequelizeDefaultOptions = {
  "define": {
    "underscored": true,
    "timestamps": false
  },
  "logging": false
}

if (process.env.SSL_ENABLED == true) {
  sequelizeDefaultOptions["dialectOptions"] = {
    "ssl": true
  }
}

if (!process.env.DATABASE_URL) throw "DATABASE_URL is undefined";
const sequelize = new Sequelize(process.env.DATABASE_URL, sequelizeDefaultOptions)

class User extends Model { }

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  UserName: DataTypes.STRING,
  FirstName: DataTypes.STRING,
  LastName: DataTypes.STRING,
  Age: DataTypes.INTEGER
}, { sequelize });

User.sync();

module.exports = { User }
