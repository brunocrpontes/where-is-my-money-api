const { Schema, model } = require('mongoose')
const Category = require('./category')

const paymentSchema = new Schema({
  name: { type: String, requier: true },
  description: { type: String, requier: true },
  value: { type: Number, requier: true },
  remember: { type: Boolean, requier: true },
  rememberFrequency: { type: String, requier: true },
  date: { type: Date, required: true },
  category: Category.schema
}, {
  timestamps: true
})

module.exports = model('Payment', paymentSchema)
