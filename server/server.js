const express = require('express');
const cors = require('cors');
const app = express()
const serverRoutes = require('./routes/serveRoutes');

app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(serverRoutes)


app.listen(3030, () =>{
  console.log('Server is running');
})

