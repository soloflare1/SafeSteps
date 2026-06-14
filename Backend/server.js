require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const connectDB = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// HTTP server
const server = http.createServer(app);

// Socket.IO setup
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// Socket connection
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

// Make io accessible globally
app.set("io", io);

// Routes
app.use('/api/location', require('./routes/location.routes'));

app.get('/', (req, res) => {
  res.send('SafeSteps Backend Running');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Server running on', PORT);
});