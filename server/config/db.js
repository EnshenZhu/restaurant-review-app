const { connect } = require('http2');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

//Access the environment variables
const mongo_username = process.env.MONGO_USERNAME;
const mongo_password = process.env.MONGO_PASSWORD;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.ocvnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("test_restaurant_review").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = client;