const express = require('express');
const cors = require('cors');
// const {application} = express;

const app = express();
app.use(cors());

//import end point disini
const admin = require('./routes/admin')
app.use("/store/admin", admin)

//endpoint customer
const customer = require('./routes/customer');
app.use("/customer", customer)

const product = require('./routes/product');
app.use("/product", product)

app.listen(8080, () => {
    console.log("server run on port 8080");
})