const Category = require('../models/category')

exports.save = async (ctx, next) => {
  const props = ctx.request.body

  try {
    ctx.body = await Category(props).save()
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}

exports.update = async (ctx, next) => {
  const id = ctx.params.id
  const props = ctx.request.body
  try {
    ctx.body = await Category.findByIdAndUpdate({ _id: id }, props)
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}

exports.delete = async (ctx, next) => {
  const id = ctx.params.id

  try {
    await Category.findByIdAndDelete(id)
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}

exports.show = async (ctx, next) => {
  const id = ctx.params.id

  try {
    ctx.body = await Category.findOne({_id: id})
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}

exports.listAll = async (ctx, next) => {
  try {
    ctx.body = await Category.find()
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}
