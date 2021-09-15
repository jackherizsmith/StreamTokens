const db = require('./db');

module.exports = async (req, res) => {

  return res.send(JSON.stringify(db));
}
