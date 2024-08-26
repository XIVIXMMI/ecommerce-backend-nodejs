'use strict'

const shopModel = require("../models/shop.model");
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({name, email, password}) => {
        try {
            //step 1 check email exists
            const holderShop = await shopModel.findOne({ email }).lean() //querry nhanh, giam tai size cua object tra ve obj Js thuan tuy

            if(holderShop){
                return {
                    code: 'xxx',
                    message: 'Shop is already registered!!'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10) //salt = do kho cua password
            const newShop = await shopModel.create({
                name, 
                email, 
                password: passwordHash, 
                roles: [RoleShop.SHOP]
            });

            if(newShop){
                // create privateKey and publicKey 
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa',{
                    modulusLength: 4096
                })
                console.log({ privateKey, publicKey}); //save collection KeyStore
                
            }
            
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}

module.exports = AccessService