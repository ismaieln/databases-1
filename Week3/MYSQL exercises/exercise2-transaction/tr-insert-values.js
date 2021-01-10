const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

let account_values = [
  "INSERT INTO account VALUES(default, 50000);",
  "INSERT INTO account VALUES(default, 4700);",
  "INSERT INTO account VALUES(default, 1500);",
  "INSERT INTO account VALUES(default, 600);",
];
let account_change_values = [
  "INSERT INTO account_change VALUES(default, 101, 500, '2021-01-05', '500 transfer to account number 102');",
  "INSERT INTO account_change VALUES(default, 102, 500, '2021-01-05', '500 received from account number 101');",
  "INSERT INTO account_change VALUES(default, 101, 500, '2020-11-15', '1500 transfer to account number 103');",
  "INSERT INTO account_change VALUES(default, 103, 500, '2020-11-15', '1500 received from account number 101');",
];

insertValues(account_values);
insertValues(account_change_values);

//Function to insert values into tables
function insertValues(values) {
  values.forEach((element) => {
    connection.query(element, (err, results, fields) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("Value added...");
}

connection.end();
