const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/role_auth'
const connectDB = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = connectDB