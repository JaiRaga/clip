import express from 'express'
import './mongoose/mongoose'
import './utils/cloudinary'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 9008

app.get('/', (req, res) => res.send('Hello there!'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
