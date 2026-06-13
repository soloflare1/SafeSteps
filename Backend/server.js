
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/location', require('./routes/location.routes'));

app.get('/', (req,res)=>{
  res.send('SafeSteps Backend Running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server running on', PORT));


app.get('/api/test', (req,res)=>{
  res.json({ok:true});
});