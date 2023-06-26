const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const config = require("./config");

const uri = config.dbUrl;
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db();
    /* const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query); */
    console.log(database);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);