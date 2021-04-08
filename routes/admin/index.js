'use strict'
const api = require('express').Router()
/**
 * Send Header Details, PO LINES & Documents in One Request
 */
const CreateDeliveryController = require('../../controllers/user/create')



module.exports = (()=>{
    api.get('/',(req,res)=>res.send({message : 'DELIVERY_SERVICE_READY',status : 200, code : 200}))
    /**
     * POST_CREATE_PO
     * @param {req.body}
     * @method {POST}
     */

    api.post('/create-delivery',
    CreateDeliveryController.saveDelivery
    )

    return api;
})();
