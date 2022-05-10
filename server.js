const express = require("express")
const app = express()
const PORT = 5000 || process.env.PORT
const connectDB = require("./config/db");
connectDB();
app.use(express.json())
app.use("/api/product", require("./product/route"))
app.use("/api/auth", require("./Auth/route"))


const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})