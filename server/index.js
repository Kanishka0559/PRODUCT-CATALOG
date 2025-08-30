const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 60000,
    image: "https://via.placeholder.com/200x150.png?text=Laptop",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone",
    price: 30000,
    image: "https://via.placeholder.com/200x150.png?text=Smartphone",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise cancelling headphones",
    price: 5000,
    image: "https://via.placeholder.com/200x150.png?text=Headphones",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
