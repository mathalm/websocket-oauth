const Sequelize = require("sequelize");
const { v4: uuidv4 } = require("uuid");
var bcrypt = require("bcryptjs");

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
  async saveInBase({ username, password, email }) {
    try {
      let uuid = uuidv4();
      console.log(username,password,email);
      var passwordEncrypted = bcrypt.hashSync(password, 8);
      bcrypt.compare(password, passwordEncrypted)


      // implementando o bcrypt

        .then((res) => {console.log(res)});

      const data = await this.login.create({
        id: uuid,
        username: username,
        password: passwordEncrypted,
        email: email,
      });
      return data;

    } catch (error) {
      console.log(error);
    }
  }
  async getInBase(email) {
    console.log(email, "aqui");
    const searchEmail = email.email;
    let data = await this.login.findOne({ where: { email: searchEmail } });
    return data;
  }
};
