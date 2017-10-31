module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    
    owner_name: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    }, 
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    treats: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true
    },
    shedding: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    energy: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    trainability : {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    kid: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    groom: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    drool: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    bark: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    independence: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
  });

 Room.associate = function(models) {
    Room.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
        }
      });
   };

  return Room;
};