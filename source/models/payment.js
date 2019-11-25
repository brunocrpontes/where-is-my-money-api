const { Schema, model } = require('mongoose')

const paymentSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    remember: { type: Boolean, required: true }
  },
  {
    timestamps: true
  }
)

module.exports = model('Payment', paymentSchema)
