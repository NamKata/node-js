// Using Node.js `require()`
const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/crud_node_js', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        useCreateIndex: true
        });
        console.log("Connection DATABASE successfully!!!!")
    } catch (error) {
        console.log("Connection DATABASE failure!!!!")
    }
}
module.exports = {connect}