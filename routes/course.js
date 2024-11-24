const { Router } = require('express')
const courseRouter = Router()

courseRouter.post('/purchase',function(req,res){
    res.json({
        msg :"you have brought the course"
    })
})

courseRouter.get('/preview',function(req,res){

})

module.exports = {
    courseRouter: courseRouter
}