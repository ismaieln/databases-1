const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

let account =
  "CREATE TABLE IF NOT EXISTS account(account_number INT AUTO_INCREMENT PRIMARY KEY, balance DECIMAL (10, 2) NOT NULL DEFAULT 0); ALTER TABLE account AUTO_INCREMENT = 100;";

let account_change =
  "CREATE TABLE IF NOT EXISTS account_change(change_number INT PRIMARY KEY AUTO_INCREMENT, account_number INT, amount DECIMAL (10, 2), change_date DATE, remark VARCHAR(200), FOREIGN KEY (account_number) REFERENCES account(account_number));";

createTables(account);
createTables(account_change);

// Function to do the queries
function createTables(table_name) {
  connection.query(table_name, (err, results, fields) => {
    if (err) {
      throw err;
    }
  });
  console.log("table created");
}

connection.end();
