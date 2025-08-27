import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config();
const PORT = process.env.PORT || 5001


const app = express()
app.use(cors());

app.use(express.json())

connectDB()

app.use("/api/notes",notesRoutes);



app.listen(PORT,()=>{
    console.log("Server is running successfully !!!",PORT);
})


