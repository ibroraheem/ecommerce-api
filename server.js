const express = require("express")
const cors = require("cors");
const app = express()
const PORT = 5000 || process.env.PORT
const connectDB = require("./config/db");
connectDB();
app.use(express.json())
app.use(cors());
app.use("/api/", require("./routes/product-route"))
app.use("/api/auth", require("./routes/auth-route"))


const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})