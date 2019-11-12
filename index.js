require('dotenv').config()
const app = require('./source/routes')
const { connect } = require('./source/database')

connect()
  .then(() => app.listen(80))
  .then(() => console.log('Conectado!'))
  .catch((err) => console.log('Erro ao conectar ao banco de dados!', err))
