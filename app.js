const express = require('express')
const app = express()
const path = require('path')
const port = 3032

app.use(express.static('./public'));
app.use(express.static('./public/assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
  })



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})