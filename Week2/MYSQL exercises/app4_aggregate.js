const { Console } = require("console");
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

let aggregateData = [
  `SELECT paper_title, COUNT(author_no) AS Authors
  FROM Research_Papers C
      LEFT JOIN Authors_Research_Papers P
          ON C.paper_id = P.paper_id
  GROUP BY paper_title;`,
  `SELECT COUNT(*) AS PapersByFemales 
  FROM Authors_Research_Papers F
      JOIN Authors P
          ON F.author_no = P.author_no
  WHERE gender = 'f';
  `,
  `SELECT university, AVG(h_index) AS Average_Index
  FROM Authors
  GROUP BY university;
  `,
  `SELECT university, COUNT(S.author_no) AS Total_Papers
  FROM Authors U
      JOIN Authors_Research_Papers S
          ON U.author_no = S.author_no
  GROUP BY university;
  `,
  `SELECT university, MIN(h_index) AS Minimum, MAX(h_index) AS Maximum
  FROM Authors
  GROUP BY university;
  `,
];

aggregateData.forEach((elem) => {
  connection.query(elem, function (error, results, fields) {
    if (error) throw error;
  });
  console.log(`Request No. ${indexOf(elem) + 1} has been done`);
});

connection.end();
