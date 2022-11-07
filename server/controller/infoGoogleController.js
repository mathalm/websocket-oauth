const InfosLoginModel = require("../model/InfosLoginModel");

class InfoGoogleController {
  save(body) {
    this._saveInfos = new InfosLoginModel();
    const data = this._saveInfos.saveInBase(body);
    return data;
  }
  async getData(email) {
    this._getInfos = new InfosLoginModel();
    const data = await this._getInfos.getInBase(email);
    console.log('aquui');
    return data;
  }
}

exports.get = async (req, res) => {
  try {
    const email = req.params
    const infoGoogleController = new InfoGoogleController();
    const data = await infoGoogleController.getData(email);
    res.send(data).status(200);
  } catch (error) {
    console.log(error);
    res.send(error).status(500);
  }
};
exports.post = async (req, res) => {
  try {
    const infoGoogleController = new InfoGoogleController();
    const body = req.body;
    if(body.username && body.email && body.password){
      const data = await infoGoogleController.save(body);
      res.send(data).status(200);
    }else{
      res.status(400);
      res.send({error:"Incomplete JSON"})
    }
    
  } catch (error) {
    console.log(error);
    res.send(error).status(400);
  }
};
