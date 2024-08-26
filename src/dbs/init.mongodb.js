'use strict'

const mongoose = require('mongoose')

const {db: {host,name,port}} = require('../configs/config.mongodb')

const connectionString = `mongodb://${host}:${port}/${name}`

console.log(`connection string:`,connectionString);

const { countConnect } = require('../helpers/check.connect')

class Database{

    constructor(){
        this.connect()  
    }

    //connect funtion 
    connect(type = 'mongodb'){
        if( 1 === 1){
            mongoose.set('debug',true)
            mongoose.set('debug', {color:true})
        }
        mongoose.connect( connectionString,{
            maxPoolSize: 50
        }).then( _ => {
            console.log(`MongoDB Connection Successfully`, countConnect())
        })
        .catch(err => console.log(`error connect!`))
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb