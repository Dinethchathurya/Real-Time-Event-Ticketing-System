import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
//const nodemailer = require('nodemailer');

const upCommingEvents = [
  {
    id: 1,
    name: "Musical Show",
    price: 200,
    location: "Main Entrance",
  },
  {
    id: 1,
    name: "Art Exhibition",
    price: 150,
    location: "Art Hall",
  },
];

const allEvents = [
  {
    id: 1,
    name: "Musical Show",
    price: 200,
    location: "Main Entrance",
  },
  {
    id: 1,
    name: "Art Exhibition",
    price: 150,
    location: "Art Hall",
  },
];

const eventdetails = [];

app.get("/", (req, res) => {
  const data = {
    status: "success",
    data: allEvents,
  };

  res.json(data);
});

app.get("/events", (req, res) => {
  const data = {
    status: "success",
    data: upCommingEvents,
  };

  res.json(data);
});

app.get("/eventdetails/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);


  const data = {
    status: "success",
    data: upCommingEvents[id],
  };

  res.json(data);
});

app.post("/contact", (req, res) => {
  try {
    const {name, email, message}= req.body;
    console.log(name);

    res.status(200).json({
      status: 'success',
      data: { name, email, message }
    });
  } catch (error) {
    console.log(error);
    res.json("something wrong" + error);
  }

});


const port = 3002;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
