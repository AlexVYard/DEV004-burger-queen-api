const { MongoClient } = require("mongodb")

const config = require("./config")

const uri = config.dbUrl
const client = new MongoClient(uri)

async function run() {
  try {
    const database = await client.db("sample_airbnb")
    const collection = await database.collection("listingsAndReviews")
    /* const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query); */
    console.log(collection)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}

run().catch(console.dir)
