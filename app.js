const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())

const root = path.join(__dirname, 'build')
app.use(express.static(root))

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/', router)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`)
})
