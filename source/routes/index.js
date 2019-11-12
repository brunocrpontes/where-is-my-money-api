const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

const PaymentController = require('../controllers/payment')
const CategoryController = require('../controllers/category')

router
  // Payment routes
  .get('/payments', PaymentController.listAll)
  .post('/payments', PaymentController.save)
  .get('/payments/:id', PaymentController.show)
  .put('/payments/:id', PaymentController.update)
  .delete('/payments/:id', PaymentController.delete)

  // Category routes
  .get('/categories', CategoryController.listAll)
  .post('/categories', CategoryController.save)
  .get('/categories/:id', CategoryController.show)
  .put('/categories/:id', CategoryController.update)
  .delete('/categories/:id', CategoryController.delete)

app.use(router.routes())
  .use(router.allowedMethods())
  .use(koaBody())

module.exports = app
