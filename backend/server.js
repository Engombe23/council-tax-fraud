require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const cors = require('cors');
const path = require('path');


server.use(express.json());
server.use(cors(
  {
    origin: ["https://council-tax-fraud-nh5d.vercel.app"]
  }
));

//Multer Configuration
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage});

const legislationRoute = require('./routes/LegislationRoute');
const actRoute = require('./routes/ActRoute');
const learningRoute = require('./routes/LearningRoute');
const keyLinkRoute = require('./routes/KeyLinkRoute');
const generalLinkRoute = require('./routes/GeneralLinkRoute');

// Basic Express server connection
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connect();
});

// Mongoose Connection
const MONGO_URL = process.env.MONGO_URL;
async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB!");
  } catch (error){
    console.error(error);
  }
}

server.use('/api/legislation', legislationRoute);
server.use('/api/acts', actRoute);
server.use('/api/education', learningRoute);
server.use('/api/keylinks', keyLinkRoute);
server.use('/api/generallinks', generalLinkRoute);

// Deployment
const buildPath = path.join(__dirname, "../frontend/build");

if(process.env.NODE_ENV === 'production'){
  server.use(express.static(buildPath));

  server.get('*/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  server.get('/', (req, res) => {
    res.send("API is running...");
  })
}

//Upload PDF Documents
server.post('/api/documents/upload', upload.array('files'), (req, res) => {
  res.json(req.files);
})

server.get('/api/documents/upload', (req, res) => {
  res.json(req.files);
});
