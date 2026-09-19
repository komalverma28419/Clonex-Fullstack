const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const paymentRoutes = require("./routes/paymentRoutes")
const subscriptionRoutes = require("./routes/subscriptionRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/subscription", subscriptionRoutes)

app.get("/api/payment/test", (req, res) => {
    res.json({
        success: true,
        message: "Payment route is working"
    })
})
app.get("/", (req, res) =>{
    res.json({
        message: "Clonex backend is running",
    })
})
connectDB()
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})
