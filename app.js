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

app.post('/api/sign-in', (req, res) => {
    const { body } = req
    const { login, password } = body

    const authToken = Math.random().toString(36).substring(2)
    const refreshToken = Math.random().toString(36).substring(2)

    const userData = {
        id: 1,
        firstName: 'Marcin',
        lastName: 'Filipek',
    }

    if (login === 'admin' && password === 'admin') {
        res.status(200).json({
            auth: true,
            authToken,
            refreshToken,
            ...userData,
        })
    } else {
        res.status(400).json({ error: 'Sign-in error' })
    }
})
