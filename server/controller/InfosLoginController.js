import InfosLoginModel from "../model/InfosLoginModel.js";

class InfosLoginController {
  save(body) {
    this._saveInfos = new InfosLoginModel();
    const data = this._saveInfos.saveInBase(body);
    return data;
  }
  async getData(email) {
    this._getInfos = new InfosLoginModel();
    const data = await this._getInfos.getInBase(email);
    return data;
  }
  async verifyDataToLogin(data) {
    this._verifyDataToLogin = new InfosLoginModel();
    const { passwordIsCorrect, searchLogin } =
      await this._verifyDataToLogin.verifyDataToLogin(data);

    if (passwordIsCorrect && searchLogin) {
      return searchLogin;
    } else {
      return { error: "E-mail or password is incorrect!" };
    }
  }
}

export async function verifyEmailAlreadyExist(req, res) {
  try {
    const email = req.params;
    const infosLoginController = new InfosLoginController();
    const data = await infosLoginController.getData(email);
    res.send(data).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
}

export async function saveInfosLoginPost(req, res) {
  try {
    const infosLoginController = new InfosLoginController();
    const body = req.body;
    if (body.username && body.email && body.password) {
      const data = await infosLoginController.save(body);
      res.send(data).status(200);
    } else {
      res.status(400);
      res.send({ error: "Incomplete JSON" });
    }
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
}

export async function verifyDataToLogin(req, res) {
  try {
    const infosLoginController = new InfosLoginController();
    const body = req.body;
    if (body.password && body.email) {
      const resultSearchLogin = await infosLoginController.verifyDataToLogin(
        body
      );
      console.log(resultSearchLogin);
      res.status(200).send(resultSearchLogin);
    } else {
      res
        .status(400)
        .send({
          error: "To search data to login, you need send password and email!",
        });
    }
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
}
