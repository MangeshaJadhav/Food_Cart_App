const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const user = require("./models/messModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = 'RESTAPI'

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.set("strictQuery", true);
mongoose
.connect('mongodb://Mangesh:Mangesh@ac-vdwuulk-shard-00-00.hdwumhu.mongodb.net:27017,ac-vdwuulk-shard-00-01.hdwumhu.mongodb.net:27017,ac-vdwuulk-shard-00-02.hdwumhu.mongodb.net:27017/?ssl=true&replicaSet=atlas-hffnah-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connection Successfull"))
.catch((err)=>{
  console.log(err);
});//connect is promise so it resolve and reject

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
// 
app.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const { name,email,password } =
          req.body;
    
        const user_obj = await User.findOne({ email });
        if (user_obj) {
          return res.status(409).json({
            status: "Failed",
            message: "User already exist",
          });
        }
        bcrypt.hash(password, 10, async (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: "Failed",
              message: err.message,
            });
          }
          const data = await User.create({
              name,
              email,
              password:hash
            });
            res.json({
                status: "success",
                message: "Registration Successful",
                data,
            });
        })
        } catch (e) {
        res.status(500).json({
          status: "Failed",
          message: e.message,
        });
      }
});

app.post('/login', async (req, res)=>{
  try{
      console.log(req.body);
      const { email, password } = req.body;
      const user_obj = await User.findOne({ email });
      console.log(user_obj)
      if(!user_obj){
          return res.status(400).json({
              status: "Failed",
              message: "User not registered"
          })
      }
      bcrypt.compare(password, user_obj.password, (err, result)=>{
          if(err){
              return res.status(400).json({
                  status:"Failed",
                  message:err.message
              })
          }
          if(result){
              const {_id, email} = user_obj
              const token = jwt.sign({
                   exp: Math.floor(Date.now() / 1000) + (60 * 60),
                  data: user_obj._id
                }, secret);

              return res.json({
                  status:"Success",
                  message:"Login Successful",
                  token,
                  user: {_id, email}
              })
          }else{
              return res.status(400).json({
                  status:"Failed",
                  message:"Invalid credentials"
              })
          }
      })

  } catch(e){
      return res.status(500).json({
          status:"Failed",
          message:e.message
      })
  }
})
//-------------------------------------------------------------
// app.get("/getallmess",async(req,res)=>{
//   try{
//     const mess=await user.find({})
//     res.send(mess)
//   }catch(err){
//     return res.status(400).json({message:error})
//   }
// })

app.listen(9002, () => {
  console.log("App started at port 9002");
});
