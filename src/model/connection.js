import express from 'express';

const app = express()

app.use(express.json())

// app.get('/usuarios', (req, res) => {
//     res.send('ta procurando usuarios?')
// })

export default app