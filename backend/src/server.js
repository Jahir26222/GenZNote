import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"

import path from "path"

dotenv.config();
const PORT = process.env.PORT || 5001

const __dirname = path.resolve()

const app = express()

if(process.env.NODE_ENV !== "production"){
    app.use(cors(
        {
            origin:"http://localhost:5173",
        }
    ));
}
app.use(express.json())

connectDB()
app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*" , (req,res)=>{
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));

})

}



app.listen(PORT,()=>{
    console.log("Server is running successfully !!!",PORT);
})


