const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

let Authors =
  "CREATE TABLE IF NOT EXISTS Authors (author_no INT PRIMARY KEY , author_name VARCHAR(200), university VARCHAR(200), date_of_birth DATE, h_index INT, gender ENUM('m','f'));";
let sql1 =
  "ALTER TABLE Authors ADD collaborator INT, ADD CONSTRAINT FK_collaborator FOREIGN KEY (collaborator) REFERENCES Authors(author_no);";

createQuery(Authors);
createQuery(sql1);

function createQuery(sqlQuery) {
  connection.query(sqlQuery, (error, results, fields) => {
    if (error) {
      throw error;
    }
  });
  console.log("Data added");
}

connection.end();
