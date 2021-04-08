const crypto = require('crypto');
'use strict';

const async = require('async')

exports.saveDelivery =  async (req, res, next) => {
    console.log("entre a la funcion de delivery")
    try {

  
    }
    catch (error) {
      console.log(error)
      res.status(400).send({
        message : 'Existing email, try again',
        error : error,
        code : 400
    })
    }
};
