const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGDB_URI || "mongodb://localhost:27017/yoga-for-everyone",

  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;