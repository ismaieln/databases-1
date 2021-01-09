const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Omran2003",
  database: "ismaiel_db",
});

connection.connect();

let account = `CREATE TABLE IF NOT EXISTS account (account_number INT PRIMARY KEY, balance INT);`;
let account_change = `CREATE TABLE IF NOT EXISTS account_change (change_number INT PRIMARY KEY, account_number INT, amount INT, change_date DATE, remark VARCHAR(200));`;

createTables(account);
createTables(account_change);

// Function to do the queries
function createTables(table) {
  connection.query(table, (err, results, fields) => {
    if (err) {
      throw err;
    }
  });
  console.log("table created");
}

connection.end();
