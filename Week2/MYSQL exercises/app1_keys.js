const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

let Authors = [
  "CREATE TABLE IF NOT EXISTS Authors (author_no INT AUTO_INCREMENT, author_name VARCHAR(200), university VARCHAR(200), date_of_birth DATE, h_index VARCHAR(200), gender ENUM('m','f'), PRIMARY KEY ('author_no')",
  "ALTER TABLE Authors ADD collaborator INT, ADD CONSTRAINT FK_collaborator FOREIGN KEY (collaborator) REFERENCES Authors(author_no)",
];

connection.query(create_query, function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log("the reply is ", results);
});

connection.end();
