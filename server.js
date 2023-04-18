import express from 'express';
import mongoose from 'mongoose';
import Cards from '.dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongosh "mongodb+srv://cluster0.hvpqalm.mongodb.net/tinderdb" --apiVersion 1 --username imichalopo';
 
// Middlewares


// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO WORLD!'));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
})

// Listener
app.listen(port, () => console.log('listening on localhost: '+port));