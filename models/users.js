// var bcrypt = require("bcrypt-nodejs");

// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
      
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         firstname:{
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         lastname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         }
//     });

//     User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//      };
//   // Hooks are automatic methods that run during various phases of the User Model lifecycle
//   // In this case, before a User is created, we will automatically hash their password
//      User.hook("beforeCreate", function(currentuser) {
//     currentuser.password = bcrypt.hashSync(currentuser.password, bcrypt.genSaltSync(10), null);
//   });
//     User.associate = function(models) {
//     // Associating User with Room
//     // When an User is deleted, also delete any associated Rooms
//     User.hasMany(models.Room, {
//       onDelete: "cascade"
//     });
//   };
//     return User;
// };