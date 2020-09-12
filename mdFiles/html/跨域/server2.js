let express = require('express')
    app = express()
app.listen(1002,_ => {
  console.log('listen on 1002')
})
app.use(express.static('html'))