const MongoClient = require('mongodb').MongoClient
const config = require('./config')

// eslint-disable-next-line no-unused-vars
const { dbUrl } = config
// const client = new MongoClient(dbUrl)

async function connect() {
  // TODO: Conexión a la Base de Datos
  MongoClient.connect(dbUrl)
    .then((client) => {
      const database = client.db("burger_queen")
      const usersCollection = database.collection('users')

      console.log("Connected to database")
      // console.log(usersCollection)
    })
    .catch((error) => {
      console.log(error.message)
    })
  /* try {
    const database = await client.db("burger_queen")
    const usersCollection = await database.collection('users')
    // const collection = await database.collection("listingsAndReviews")
    // const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { email: 'admin@localhost' };
    // const admin = await collection.findOne(query);
    console.log("Connected to database")
    // console.log(admin)
  } catch (error) {
    console.error(error)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
    console.log("client is closed")
  } */
}

// connect().catch(console.dir)

module.exports = { connect };
