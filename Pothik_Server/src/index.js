const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SSLCommerzPayment = require("sslcommerz-lts");

// const { addUser, getAllBooking, getAllPackage, createBooking, createPackage, getUser } = require("./db/db");
const { ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// verify token
const verify_jwt = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).send({ error: true, message: "unauthorized access" });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(403).send({ error: true, message: "unauthorized accesss" });
    }
    req.decoded = decoded;
    next();
  });
};

// generate a token
app.post("/jwt", (req, res) => {
  res.send({ token });
});

app.get("/", (req, res) => {
  res.send("server is running");
});

const store_id = process.env.SSL_STORE_ID;
const store_passwd = process.env.SSL_SECRET_KEY;
const is_live = false; //true for live, false for sandbox

const tran_id = new ObjectId().toString();

app.post("/payment", async (req, res) => {
  const data = {
    total_amount: req.body.price,
    currency: "BDT",
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: "http://localhost:3000/success",
    fail_url: "http://localhost:3000/fail",
    cancel_url: "http://localhost:3000/cancel",
    ipn_url: "http://localhost:3000/ipn",
    shipping_method: "Courier",
    product_name: req.body.packageName,
    product_category: "tour",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: req.body.email,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });
  });
});

app.post("/success", (req, res) => {
  //res.send({ payment_status: true });
  res.redirect("http://localhost:3001/success");
});

app.post("/fail", (req, res) => {
  res.redirect("http://localhost:3001/failure");
});

app.get("/login", async (req, res) => {
  const data = req.body;
  const token = jwt.sign(data, process.env.SECRET_KEY);

  try {
    const user = await getUser(data);
    if (user.length < 1) {
      return res.status(401).send({ error: true, message: "unauthorized access" });
    }

    res.send({ user, accessToken: token });
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/users", async (req, res) => {
  const data = req.body;
  const token = jwt.sign(data, process.env.SECRET_KEY);

  try {
    const result = await addUser(data);

    if (!result.insertedId) {
      return res.status(400).send();
    }

    const user = {
      name: data.name,
      email: data.email,
    };

    res.status(201).send({ user, accessToken: token });
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/booking", verify_jwt, async (req, res) => {
  const data = req.body;

  try {
    const result = await createBooking(data);

    if (!result.insertedId) {
      return res.status(400).send();
    }

    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/booking", verify_jwt, async (req, res) => {
  const email = req.query.email;

  try {
    const result = await getAllBooking(email);

    if (!result) {
      return res.status(404).send();
    }

    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/packages", verify_jwt, async (req, res) => {
  const package = req.body;

  try {
    const result = await createPackage(package);

    if (!result.insertedId) {
      return res.status(400).send();
    }

    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/packages", async (req, res) => {
  try {
    const result = await getAllPackage();

    if (!result) {
      return res.status(404).send();
    }

    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
