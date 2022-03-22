const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/1640-category');
        console.log('Connect DB successfully!!!!')
    }catch{
        console.log('Connect failed');
    }
}

module.exports = {connect}