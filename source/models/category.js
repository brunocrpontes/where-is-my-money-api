const { Schema, model } = require('mongoose')

const categorySchema = Schema({
  name: { type: String, required: true },
  iconName: { type: String, required: true },
  color: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('Category', categorySchema)
