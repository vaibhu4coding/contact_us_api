const Client = require("../models/client");
async function handleClientCreation(req, res) {
  try {
    const client = new Client(req.body);
    await client.save();
    res.send(client);
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = {
  handleClientCreation,
};
