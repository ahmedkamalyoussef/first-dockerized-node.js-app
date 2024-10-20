const express = require('express');
const mongoose=require('mongoose');
const redis =require("redis");
const app = express();

const redisClient =redis.createClient({
  url:'redis://redis:6379'
});
redisClient.on("error",(err)=>console.log('failed to connect to redis',err));
redisClient.on("connect",()=>console.log('connected to redis '));
redisClient.connect();


const DB_USER='root';
const DB_PASSWORD ='example';
const DB_PORT=27017;
const DB_HOST='mongo';
const URI =`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(()=>{console.log("connected successfully")}).catch((err)=>{console.log("failed to connect",err)});

const PORT = 3000;

app.get('/', (req, res) => {
  redisClient.set("products","products ...")
  res.send('Hello, World!');
});
app.get('/data',async (req, res) => {
  const products=await redisClient.get("products")
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

