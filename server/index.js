require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_CONNECT);
const app = express();
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

const myMiddleware = (request, response, next) => {
  console.log(request.method, request.path);
  next();
};

app.use(express.json());
app.use(myMiddleware);
app
  .route("/")
  .get((request, response) => {
    response.send("HELLO WORLD");
  })

  .post((request, response) => {
    response.json(request.body);
  });

const pizzaSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  sauce: String,
  toppings: [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

app.post("/pizzas", (request, response) => {
  const newPizza = new Pizza(request.body);
  newPizza.save((err, pizza) => {
    return err ? response.sendStatus(500).json(err) : response.json(pizza);
  });
});

const dbConnect = process.env.DB_CONNECT || "mongodb://localhost/pizzas";
app.route("/pizzas/:id").get((request, response) => {
  const id = request.params.id;
  // handle GET request for post with an id of "id"
  // response.send(`Your ID was ${id}`);
  response.status(418).json({
    id: id
  });
});
app.route("/**").get((request, response) => {
  response.status(404).send("Not Found");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
