const mongoose = require('mongoose')

exports.connect = () =>
  mongoose.connect(
    `mongodb://where-is-my-money-usr:${process.env.DB_PASSWORD}@where-is-my-money-shard-00-00-l0jsu.mongodb.net:27017,where-is-my-money-shard-00-01-l0jsu.mongodb.net:27017,where-is-my-money-shard-00-02-l0jsu.mongodb.net:27017/test?ssl=true&replicaSet=where-is-my-money-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
