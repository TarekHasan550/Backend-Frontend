import express from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from 'mongodb'

// user: firstMongoDbTarekHassan550
// password: MLgYHHyuQW1wyHh3

const uri = "mongodb+srv://firstMongoDbTarekHassan550:MLgYHHyuQW1wyHh3@tarekhassan550.lvdr3ny.mongodb.net/?retryWrites=true&w=majority&appName=TarekHassan550";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express();
const port = process.env.PORT || 3000;

const phoneData = [
  {
    "id": "phone001",
    "brand": "Apple",
    "model": "iPhone 15 Pro",
    "price": 1299,
    "image": "url...",
    "specs": {
      "processor": "A17 Bionic",
      "ram": "8GB",
      "storage": "256GB",
      "battery": "4300mAh",
      "camera": "48MP + 12MP + 12MP",
      "screen_size": "6.1 inch",
      "os": "iOS 18"
    }
  },
  {
    "id": "phone002",
    "brand": "Samsung",
    "model": "Galaxy S24 Ultra",
    "price": 1199,
    "image": "url...",
    "specs": {
      "processor": "Snapdragon 8 Gen 3",
      "ram": "12GB",
      "storage": "512GB",
      "battery": "5000mAh",
      "camera": "200MP + 12MP + 10MP + 10MP",
      "screen_size": "6.8 inch",
      "os": "Android 15"
    }
  }
]

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello CodeX")
})

app.get("/phones", (req, res) => {
  res.send(phoneData);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

const run = async () => {
  try {
    await client.connect();


    app.post("/phones", (req, res) => {
      const newPhone = req.body;
      newPhone.id = phoneData.length + 1;
      res.send(newPhone);
      // console.log(req.body);
      console.log(phoneData);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error)
  }
  finally {


  }
}

run().catch(console.dir)
