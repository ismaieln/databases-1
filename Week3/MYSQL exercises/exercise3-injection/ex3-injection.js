const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
  multipleStatements: true,
});

connection.connect();

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  conn.query(
    `SELECT Population FROM ? WHERE Name = ? and code = ?`,
    (err, result) => {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

connection.end();
