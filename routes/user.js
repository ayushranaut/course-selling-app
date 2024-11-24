const { Router } = require('express')
const userRouter = Router()

userRouter.post('/register',function(req,res){
    res.json({
        msg:"registered"
    })
})

userRouter.post('/signin',function(req,res){
    res.json({
        msg:"you have signin"
    })
})

userRouter.get('/purchese',function(req,res){
    res.json({
        msg : "my course"
    })
})

module.exports = {
    userRouter : userRouter
}