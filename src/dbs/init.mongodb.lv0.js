'use strict'

const mongoose = require('mongoose')

const connectionString = `mongodb://localhost:27017/e-shop`
mongoose.connect( connectionString).then( _ => console.log(`connected mongo success`))
.catch(err => console.log(`error connect!`))

// dev environment
if( 1 === 0){
    mongoose.set('debug',true)
    mongoose.set('debug', {color:true})
}

module.exports = mongoose