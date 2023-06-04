require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const userCollection = client.db("PathikDB").collection("users");
const bookingCollection = client.db("PathikDB").collection("booking");
const packagesCollection = client.db("PathikDB").collection("packages");
const blogCollection = client.db("PathikDB").collection("blogs");

async function connectToDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("PathikDB").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

connectToDB();

const addUser = async (user) => {
  try {
    const result = await userCollection.insertOne(user);

    return result;
  } catch (e) {
    console.log(e);
  }
};

const getUser = async (user) => {
  const query = { email: user.email, password: user.password };
  try {
    const result = await userCollection.find(query).toArray();

    return result;
  } catch (e) {
    console.log(e);
  }
};

const createBlog = async (blog) => {
  try {
    const result = await blogCollection.insertOne(blog);

    return result;
  } catch (e) {
    console.log(e);
  }
};

const getBlogs = async (email) => {
  const query = { email: email };
  try {
    const result = await blogCollection.find(query).toArray();

    return result;
  } catch (e) {
    console.log(e);
  }
};

const createBooking = async (data) => {
  try {
    const result = await bookingCollection.insertOne(data);

    return result;
  } catch (e) {
    console.log(e);
  }
};

const getAllBooking = async (email) => {
  const query = { email: email };
  try {
    const result = bookingCollection.find(query).toArray();

    return result;
  } catch (e) {
    console.log(e);
  }
};
const createPackage = async (pkg) => {
  try {
    const result = await packagesCollection.insertOne(pkg);

    return result;
  } catch (e) {
    console.log(e);
  }
};
const getAllPackage = async () => {
  try {
    const result = packagesCollection.find().toArray();

    return result;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  addUser,
  getUser,
  getAllBooking,
  createBooking,
  getAllPackage,
  createPackage,
  createBlog,
  getBlogs,
};
