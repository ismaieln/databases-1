const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect();
const db = require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// city table
let cities = `SELECT json_object('name',name, 'countryCode',CountryCode, 'District',District,'Population',Population)
 AS 'cities' FROM city LIMIT 5;`;

connection.query(cities, (err, results, fields) => {
  if (err) throw err;
  for (i = 0; i < results.length; i++) {
    app.post("/", (req, res) => {
      db.getDB()
        .collection("city")
        .insertOne(results[i].cities, (err, result) => {
          if (err) console.log(err);
          else {
            console.log(result);
            res.json({
              result: result,
              document: result.ops[0],
            });
          }
        });
    });
  }
});

// countryLanguage table
let countryLanguages = `SELECT json_object('CountryCode', CountryCode, 'Language', Language, 'IsOfficial', IsOfficial,
 'Percentage', Percentage) AS 'countryLanguages' FROM countrylanguage LIMIT 5;`;

connection.query(countryLanguages, (err, results, fields) => {
  if (err) throw err;
  for (i = 0; i < results.length; i++) {
    app.post("/", (req, res) => {
      db.getDB()
        .collection("countrylanguage")
        .insertOne(results[i].countryLanguages, (err, result) => {
          if (err) console.log(err);
          else
            res.json({
              result: result,
              document: result.ops[0],
            });
        });
    });
  }
});

//country table
let countries = `SELECT json_object('Code',Code, 'Name',Name, 'Continent',Continent,'Region',Region,
'SurfaceArea',SurfaceArea,'IndepYear',IndepYear,'Population',Population,'LifeExpectancy',LifeExpectancy,
'GNP',GNP,'GNPOld',GNPOld,'LocalName',LocalName,'GovernmentForm',GovernmentForm,'HeadOfState',HeadOfState,
'Capital',Capital,'Code2',Code2) AS 'countries' FROM country LIMIT 5;`;

connection.query(countries, (err, results, fields) => {
  if (err) throw err;
  for (i = 0; i < results.length; i++) {
    app.post("/", (req, res) => {
      db.getDB()
        .collection("country")
        .insertOne(results[i].countries, (err, result) => {
          if (err) console.log(err);
          else
            res.json({
              result: result,
              document: result.ops[0],
            });
        });
    });
  }
});

connection.end();
