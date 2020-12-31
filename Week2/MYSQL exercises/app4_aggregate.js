const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

// All research papers and the number of authors that wrote that paper
let query1 = `SELECT paper_title, Count(author_no) AS Authors
              FROM research_papers 
              LEFT JOIN authors 
              ON author_id = author_no
              GROUP BY paper_title;`;

//Sum of the research papers published by all female authors.
let query2 = `SELECT COUNT(*) AS 'paper by Female Authors'
              FROM research_papers 
              join Authors
              WHERE gender = 'f' AND author_id = author_no;`;

//Average of the h-index of all authors per university.
let query3 = `SELECT university, AVG(h_index) AS Average_Index
              FROM Authors GROUP BY university;`;

//Sum of the research papers of the authors per university.
let query4 = `SELECT university, COUNT(author_no) AS 'Total Papers'
              FROM Authors
              JOIN Research_Papers
              ON author_no =author_id
              GROUP BY university;`;

//Minimum and maximum of the h-index of all authors per university.
let query5 = `SELECT university, MIN(h_index) AS Minimum, MAX(h_index) AS Maximum
              FROM Authors
              GROUP BY university;`;

// Call the function to do the query
doQueries(query1);
doQueries(query2);
doQueries(query3);
doQueries(query4);
doQueries(query5);

// Function to do the queries
function doQueries(queryX) {
  connection.query(queryX, (err, results, fields) => {
    if (err) throw err;
    console.log(results);
  });
}

connection.end();
