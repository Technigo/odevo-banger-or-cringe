import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import songRoutes from "./routes/songRoutes.js"

const app = express()
const PORT = process.env.PORT || 9000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/songs", songRoutes)

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB:", error)
  })
