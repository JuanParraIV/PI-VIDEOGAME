const { DataTypes } =require ("sequelize");


module.exports = (sequelize)=> {;
// defino el modelo
sequelize.define( // sequelize.define(modelName, attributes, options)
  "genres",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  });
};
