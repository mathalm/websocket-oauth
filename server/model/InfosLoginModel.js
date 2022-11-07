const Sequelize = require("sequelize");
const {v4: uuidv4} = require('uuid');

const bancoDeDados = new Sequelize("OAuth", "postgres", "Senhaforte06.", {
  host: "localhost",
  dialect: "postgres",
  // dialectOptions: {
  //   useUTC: true
  // },
  // timezone: '-03:00'
});
module.exports = class InfosLoginModel {
  constructor() {
    this.login = bancoDeDados.define("logins", {
      id: {
        type: Sequelize.DataTypes.CHAR,
        primaryKey: true,
      },
      username: {
        type: Sequelize.DataTypes.CHAR,
      },
      password: {
        type: Sequelize.DataTypes.CHAR,
      },
      email: {
        type: Sequelize.DataTypes.CHAR,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  }
  async saveInBase({username, password,email}) {
    let uuid = uuidv4()
    
    const data = await this.login.create({
      id: uuid,
      username:username,
      password:password,
      email:email
    })
    return data;
    
  }
  async getInBase(email){
    console.log(email, 'aqui');
    const searchEmail = email.email
    let data = await this.login.findOne({where: {email: searchEmail}});
    return data;
  }
};
