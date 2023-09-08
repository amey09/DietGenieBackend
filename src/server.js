import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}))

const port = 5000

app.get('/', (req, res) => {
    res.send('API is running....');
})

app.listen(port, () => console.log(`Server started on ${port}`))