import express from 'express'

const app = express()


app.get('/home', (req, res) => {
  res.send('welcome to Express')
})
const PORT = 3000
app.listen(PORT, () => {
  console.log("Server running ........")
})
