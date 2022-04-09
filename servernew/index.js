
const cors = require('cors');
const express = require('express');
const app =express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path")



dotenv.config();
app.use(express.json());

app.use("/auth",authRoute);
app.use("/users",userRoute);
app.use("/posts",postsRoute);
app.use("/categories",catRoute);

app.use("/images",express.static(path.join(__dirname,"/images")));

app.use(cors());

app.use("/l",(req,res) => {
    res.send("Hello blog")
})
const PORT = process.env.PORT || 4000;
const MONGO_URL="mongodb+srv://Velan:Velandb321@cluster0.gd7mq.mongodb.net/blog?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL,{useNewUrlParser: true,
useUnifiedTopology: true,

})
.then(() => app.listen(process.env.PORT||PORT, () => console.log(`Server Running on Port: ${PORT}`)))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images");
    },filename:(req,file,cb) => {
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/upload",upload.single('file'),(req,res) => {
    res.status(200).json("File upload")
});









// app.listen("4000",  () => {
// console.log("Running")
// })