const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

connection.connect();

// countries Above 8M:

const queries = [
  "SELECT Name FROM country WHERE population > 8000000",
  'SELECT Name FROM country WHERE name LIKE "%land%"',
  "SELECT Name FROM city WHERE population > 500000 AND population < 1000000",
  "SELECT Name FROM country WHERE Continent LIKE 'Europe'",
  "SELECT Name FROM country ORDER BY -SurfaceArea DESC",
  "SELECT Name FROM city WHERE CountryCode='NLD'",
  "SELECT Population FROM city WHERE Name = 'Rotterdam'",
  "SELECT Name FROM country ORDER BY -SurfaceArea Limit 10",
  "SELECT Name FROM city ORDER BY Population DESC LIMIT 10",
  "SELECT SUM(Population) World_Population FROM country",
];

const headers = [
  "1-Countries Above 8M: ",
  "2-Countries Contains Land in their name: ",
  "3-Cities Between Half M And 1M: ",
  "4-Countries In Europe: ",
  "5-Countries Descending By Surface Area: ",
  "6-Cities In NL: ",
  "7-Population of Rotterdam: ",
  "8-Top 10 Countries By Surface Area: ",
  "9-Top 10 Cities By Population: ",
  "10-Population Sum in world: ",
];
let a = 0;

queries.forEach((elem) => {
  connection.query(elem, (err, results, fields) => {
    if (err) throw err;
    console.log(headers[a], results);
    a++;
  });
});

connection.end();
