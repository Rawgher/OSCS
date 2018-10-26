module.exports = function(sequelize, DataTypes) {
  var Sessions = sequelize.define("Sessions", {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING
    },
    expires: {
      type: DataTypes.DATE,
    },
    data: {
      type: DataTypes.STRING(50000)
    }
  });

  return Sessions;
};
