import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 9000

app.get('/', (req, res) => res.send('Hello there!'))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
