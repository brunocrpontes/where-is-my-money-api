const { Schema, model } = require('mongoose')

const paymentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  remember: { type: Boolean, required: true },
  rememberFrequency: { type: String, enum: ['Daily', 'Weekly', 'Yearly' ], required: () => this.remember },
  date: { type: String, required: true, validate: /(\d{2})\/(\d{2})\/(\d{4})/ },
  category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
}, {
  timestamps: true
})

module.exports = model('Payment', paymentSchema)
