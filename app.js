const express = require("express")
const multer = require("multer")
const fs = require("fs")

const app = express()

const upload = multer({dest:"uploads/"})

app.post("/upload", upload.single("file"), (req,res)=>{
 const filename = req.file.originalname
 const filepath = "uploads/" + filename

 fs.renameSync(req.file.path, filepath)

 res.send("File uploaded successfully")
})

app.get("/file",(req,res)=>{
 const filename = req.query.name
 const path = "./uploads/" + filename

 res.sendFile(path)
})

app.listen(3000,()=>{
 console.log("File server running")
})
