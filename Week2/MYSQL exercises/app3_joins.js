const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

let printData = [
  `
  SELECT A.author_name, B.author_name AS Collaborators
  FROM Authors A
      JOIN Authors B
      ON A.collaborator = B.author_no;`,
  `SELECT author_name, paper_title FROM Authors S 
      LEFT JOIN Authors_Research_Papers R
      ON S.author_no = R.author_no
      LEFT JOIN Research_Papers H
      ON H.paper_id = R.paper_id;`,
];

printData.forEach((elem) => {
  connection.query(elem, (error, results, fields) => {
    if (error) throw error;
  });
  console.log(`Request has been done`);
});

connection.end();
