const app = require('express')()

app.get('/', (req, res) => {
  return res.json({
    message: 'ok'
  })
})

app.listen(process.env.PORT || 8080)