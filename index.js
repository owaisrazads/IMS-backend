import express from "express";
import cors from 'cors';
import db from './config/db.js'
import routes from './routes/routes.js'
const app = express();


// MiddleWare
app.use(cors())
app.use(express.json())


db.connection.once('open', () => console.log("connected to db")).on("error", (err) => console.log("error connecting db -->", err))

app.get('/', (req, res)=>{
    res.send('Hello Backend')
})

app.listen(3000, function () {
    console.log('Server is running at port 3000')
})

//GET, POST, PUT, DELETE
app.use('/', routes)