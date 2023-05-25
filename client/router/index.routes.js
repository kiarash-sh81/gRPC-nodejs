const { ProuductRoutes } = require('./prouduct.routes');

const router = require('express').Router();
router.use("/product" , ProuductRoutes);
module.exports = {
    AllRoutes : router
}