const express = require('express')
const path=require('path')
const app = express()
const cors= require("cors")

//cors usage
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public"))); //serve static files

//API route example
app.get('/', (req, res) => {
  app.render('public/index.html')
})


const port=process.env.PORT||5000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})