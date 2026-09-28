import express from 'express'
import fs from 'fs'

// const app = express()

// app.get('/home', (req, res) => {

//     const data = fs.readFileSync('index.html', 'utf-8')

//     res.send(data)         

// })

// const PORT = 3004

// app.listen(PORT, () => {
//     console.log("Server running ........")
// })

const app=express()
const bookData = fs.readFileSync("./data/books.json","utf-8")
app.get("/api/v1/books",(req,res)=>{
    try{
         res.status(200).json({
        status:"Success",
        totalbooks:bookData.length,
        data:{
            book:bookData
        }

    })
 
}catch(error){
    res.status(404).json({
        status:"fail",
        message:"Bokks not found"
    })
}
})


   

app.listen(8000,()=>{
    console.log("Server is running ..........")
})