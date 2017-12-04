const express = require('express')

const app = express()

console.log(__dirname)

app.use(express.static('build'))

app.get('/', (req, res) => res.sendFile(__dirname + '/build/index.html'))


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
