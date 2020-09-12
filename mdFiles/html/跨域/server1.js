let express = require('express')
    app = express()
app.listen(1001,_ => {
  console.log('listen on 1001')
})
app.use(express.static('html'))