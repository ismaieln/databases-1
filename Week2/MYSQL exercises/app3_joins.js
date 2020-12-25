const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

let correspondace = `SELECT a.author_name, b.author_name AS Collaborators
  FROM authors a
  LEFT JOIN authors b
  ON a.author_no = b.collaborator;`;

let pubished = `SELECT author_name, paper_title as paper
FROM authors
LEFT JOIN research_papers
ON authors.author_no = research_papers.author_id;`;

printData(correspondace);
printData(pubished);

function printData(dataP) {
  connection.query(dataP, (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });
}

connection.end();
