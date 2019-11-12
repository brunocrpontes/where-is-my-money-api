const Payment = require('../models/payment')

exports.save = async (ctx, next) => {
  const props = ctx.request.body

  try {
    const payment = await new Payment(props).save()

    ctx.body = await payment.populate('category').execPopulate()

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
    ctx.body = await Payment.findByIdAndUpdate({ _id: id }, props, {new: true})
      .populate('category')
      .exec()
    
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
    await Payment.findByIdAndDelete(id)
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
    ctx.body = await Payment.findOne({ _id: id })
      .populate('category')
      .exec()
    
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
    ctx.body = await Payment.find()
      .populate('category')
      .exec()
    ctx.status = 200

    next()
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      message: err
    }
  }
}
