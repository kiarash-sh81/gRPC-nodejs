const { default: mongoose } = require("mongoose");

module.exports = mongoose.connect("mongodb://localhost:27017/grpc-node")
.then(()=> console.log("connect to db successfully"))
.catch((err) =>{
    console.log(err.message);
})