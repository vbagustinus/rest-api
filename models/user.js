'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isadmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  User.prototype.getFullName = function () {
    return this.first_name + ' ' +this.last_name
  }
  return User;
};