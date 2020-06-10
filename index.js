const express = require('express')
const app = express()

mongoose.connect('mongodb://localhost/rentmymovie')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'))


app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))