import express from 'express'

const app = express()

const PORT = process.env.PORT ?? 8000

app.get('/',(req,res)=>{
    return res.json({
        message:"Server is healthy v5.1 ❤️",
        status: "Github Actions Hurarayyyy!!",
        notify:"Adding ssl",
        next:"what next"
    })
})

app.listen(PORT,()=> console.log(`Server is running on PORT: ${PORT}`))