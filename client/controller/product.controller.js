const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const protoPath = path.join(__dirname , ".." , ".." , "protos" , "product.proto");
const productProto = protoLoader.loadSync(protoPath);
const {productPackage} = grpc.loadPackageDefinition(productProto);
const productServerUrl = "localhost:4001";
const productClient = new productPackage.ProductService(productServerUrl , grpc.credentials.createInsecure());

async function listProduct(req , res , next){
    productClient.listProduct(null , (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
async function getProduct(req , res , next){
    const {id} = req.params;
    productClient.getProduct({id} , (err , data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
async function createProduct(req , res , next){
    const {title , price} = req.query;
    productClient.createProduct({title , price} , (err , data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
async function updateProduct(req , res , next){
    const data = req.query;
    productClient.updateProduct(data , (err , data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
}
async function deleteProduct(req , res , next){
    const {id} = req.params;
    productClient.deleteProduct({id} , (error , data)=>{
        if(error) return res.json(error);
        return res.json(data);
    })
}

module.exports ={
    listProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}