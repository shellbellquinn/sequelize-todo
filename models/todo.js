module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: { type: DataTypes.STRING, 
      allowNull: false,
      unique: true,  
      validate: {
          len: {
              args: [3, 140],
              msg: "Name must be at least 3 characters in length",
          }},
    },
    complete: { type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  return Todo;
}
