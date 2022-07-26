const { connect } = require("mongoose");
module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.time("mongooseConnection");
      const mongoURL = "mongodb://localhost:27017";
      const mongooseConnection = await connect(mongoURL);
      console.timeEnd("mongooseConnection");
      resolve(mongooseConnection);
    } catch (e) {
      reject(e);
    }
  });
};
