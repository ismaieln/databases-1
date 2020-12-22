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

let printData = [
  `
  SELECT A.author_name, B.author_name AS Collaborators
  FROM Authors A
      JOIN Authors B
      ON A.collaborator = B.author_no;
  `,
  `
  SELECT author_name, paper_title 
  FROM Authors S 
      LEFT JOIN Authors_Research_Papers R
          ON S.author_no = R.author_no
      LEFT JOIN Research_Papers H
          ON H.paper_id = R.paper_id;
  `,
];

printData.forEach((elem) => {
  connection.query(elem, function (error, results, fields) {
    if (error) throw error;
  });
  console.log(`Request No. ${indexOf(elem) + 1} has been done`);
});

connection.end();
