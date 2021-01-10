const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();
let transaction = `
SET AUTOCOMMIT = 0;
START TRANSACTION;
UPDATE account SET balance = balance-1000
WHERE account_number =101;
UPDATE account SET balance = balance+1000
WHERE account_number = 102;
INSERT INTO account_change VALUES(DEFAULT,101,1000,'2021-01-10','1000 transfer to account number 102');
INSERT INTO account_change VALUES(DEFAULT,102,1000,'2021-01-10','1000 received from account number 101');
COMMIT;
SET AUTOCOMMIT = 1;
`;

connection.query(transaction, (err, results, fields) => {
  if (err) {
    throw err;
  }
  console.log("|Transaction completed");
});

connection.end();
