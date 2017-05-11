var bcrypt = require("bcrypt");

module.exports = (sequelize, DataType) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: false
      }
    }
  }, {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      classMethods: {
        associate: (models) => {
          Users.hasMany(models.Tasks);
        },
        isPassword: (encondedPassword, password) => {
          return bcrypt.compareSync(password, encondedPassword);
        }
      }
    });
  return Users;
}