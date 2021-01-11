const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db");

const collection = "city";
const PORT = 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const myCity = req.body;
  db.getDB()
    .collection(collection)
    .insertOne(myCity, (err, result) => {
      if (err) console.log(err);
      else
        res.json({
          result: result,
          document: result.ops[0],
          msg: "City inserted successfully",
        });
    });
});

app.put("/:id", (req, res) => {
  const key = req.params.id;
  const population = req.body.Population;
  db.getDB()
    .collection(collection)
    .findOneAndUpdate(
      { _id: db.getPrimaryKey(key) },
      { $set: { population: Population } },
      { returnOrginal: false },
      (err, result) => {
        if (err) console.log(err);
        else res.json(result);
      }
    );
});

app.get("/:id", (req, res) => {
  const data = req.params.id;
  db.getDB()
    .collection(collection)
    .find({ $or: [{ name: data }, { country_code: data }] })
    .toArray((err, document) => {
      if (err) console.log(err);
      else {
        console.log(document);
        res.json(document);
      }
    });
});

app.delete("/:id", (req, res) => {
  const toDelete = req.params.id;
  db.getDB()
    .collection(collection)
    .findOneAndDelete({ _id: db.getPrimaryKey(toDelete) }, (err, result) => {
      if (err) console.log(err);
      else res.json(result);
    });
});

db.connect((err) => {
  if (err) {
    console.log("unable to connect to database");
    process.exit(1);
  } else {
    app.listen(PORT, () => {
      console.log(`connecting to database , app listening to port ${PORT}`);
    });
  }
});
