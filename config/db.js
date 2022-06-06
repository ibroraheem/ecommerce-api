const mongoose = require('mongoose')

const url = process.env.DB_URL || 'mongodb://localhost:27017/product'
const connectDB = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB