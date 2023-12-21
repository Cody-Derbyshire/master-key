require('dotenv').config();

const port = process.env.PORT || 5001;
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {});

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});

/* const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();


// MongoDB connection setup
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Start the server
async function startServer() {
  await connectToMongoDB(); // Connect to MongoDB before starting the server

  app.listen(port, () => {
    console.log(`API server started at http://localhost:${port}`);
  });
}

startServer().catch(console.error);

// Handle graceful shutdown
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log('MongoDB connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    process.exit(1);
  }
});
 */
