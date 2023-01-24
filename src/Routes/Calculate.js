const express = require('express');


const App = express.Router();

App.post('/', async(req, res)=>{
    
    const {amount, rate, years} = req.body

    if(!amount || !rate || !years){
        res.status(404).send({error:true, message:"All amount, rate, years fields required"});
    }
    try{
        const i=rate/100
        const maturity = amount*((((1+i) ** years)-1)/i)
        
        const totalAmount = amount * years;

        const totalInterest = maturity - totalAmount;

        res.send({maturity, totalAmount, totalInterest})

    }catch(err){
        res.status(404).send({error:true, message:err.message})
    }

})

module.exports = App;