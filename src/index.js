const express = require('express');
const mongoose=require('mongoose');
const app = express();

const DB_USER='root';
const DB_PASSWORD ='example';
const DB_PORT=27017;
const DB_HOST='mongo';
const URI =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(()=>{console.log("connected successfully")}).catch((err)=>{console.log("failed to connect",err)});

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World asdasd!');
});
app.get('/t', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

