const express = require('express')
const app = express()
const port = 3000

//ROUTES Definitions

// Cách 1
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Cách 2
app.get('/wellcome', function(req, res){
    return res.send('Hello World!');
})

// Cách 3
app.get('/xin-chao', (req,res)=> res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})