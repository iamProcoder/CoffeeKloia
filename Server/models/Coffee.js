const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  ingredients: {
    type: Array,
    items: {
      type: String,
      enum: ["iced", "hot"],
    },
  },
  createdTime: {
    type: String,
    default: () => new Date(+new Date() + 7*24*60*60*1000)
  },
  updatedTime: {
    type: String,
    default: () => new Date(+new Date() + 7*24*60*60*1000)
  },
});

module.exports = mongoose.model('Coffee', CoffeeSchema);