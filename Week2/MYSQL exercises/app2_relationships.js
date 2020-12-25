const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

// Create a table Authors
let Authors =
  "CREATE TABLE IF NOT EXISTS Authors (author_no INT PRIMARY KEY , author_name VARCHAR(200), university VARCHAR(200), date_of_birth DATE, h_index INT, gender ENUM('m','f'));";
let sql1 =
  "ALTER TABLE Authors ADD collaborator INT, ADD CONSTRAINT FK_collaborator FOREIGN KEY (collaborator) REFERENCES Authors(author_no);";

// Call the function to do the query
createQuery(Authors);
createQuery(sql1);

// Create a table Research_Papers
let Research_Papers = `CREATE TABLE IF NOT EXISTS Research_Papers(paper_id INT PRIMARY KEY,
    paper_title VARCHAR(200),
    conference VARCHAR(200),
    publish_date DATE,
    author_id int,
    CONSTRAINT FK_AUTHORS FOREIGN KEY (author_id) REFERENCES authors(author_no));`;

connection.query(Research_Papers, (err, results, fields) => {
  if (err) throw err;
  console.log("Table created", results);
});

//Values for Authors
let authors_values = [
  "INSERT INTO authors VALUES(1, 'Ismaiel01','Damascus','1969-12-05',25,'m', NULL);",
  ,
  "INSERT INTO authors VALUES(2,'Ismaiel02','Haarlem','1973-03-05',12,'m', 15);",
  ,
  "INSERT INTO authors VALUES(3,'Ismaiel03','Amsterdam','1978-04-05',13,'m', 13);",
  ,
  "INSERT INTO authors VALUES(4,'Ismaiel04','Leiden','1962-07-05',22,'m', 12);",
  ,
  "INSERT INTO authors VALUES(5,'Locy05','Damascus','1965-11-05',34,'f', 15);",
  ,
  "INSERT INTO authors VALUES(6,'Ismaiel06','Dusiburg','1981-10-05',47,'m', 1);",
  ,
  "INSERT INTO authors VALUES(7,'Ismaiel07','Bielefeid','1971-09-05',15,'m', 1);",
  ,
  "INSERT INTO authors VALUES(8,'Ismaiel08','Saxion','1979-12-05',22,'m', 2);",
  ,
  "INSERT INTO authors VALUES(9,'Locy09','Birmingham','1996-12-05',05,'f', 3);",
  ,
  "INSERT INTO authors VALUES(10,'Ismaiel10','Oxford','1986-12-05',14,'m', 7);",
  ,
  "INSERT INTO authors VALUES(11,'Ismaiel11','Cairo','1975-12-05',18,'m', 8);",
  ,
  "INSERT INTO authors VALUES(12,'Locy12','Dusiburg','1959-12-05',47,'f', 9);",
  ,
  "INSERT INTO authors VALUES(13,'Ismaiel13','Hyderabad','1985-01-25',85,'m', 7);",
  ,
  "INSERT INTO authors VALUES(14,'Ismaiel14','Osaka','1992-05-05',45,'m', 13);",
  ,
  "INSERT INTO authors VALUES(15,'Locy15','Kyoto','1947-02-15',55,'f', 3);",
];

//Values for research_Papers
let papers = [
  "INSERT INTO Research_Papers VALUES(100,'Title01', 'conference01', '2020-02-05', 1)",
  "INSERT INTO Research_Papers VALUES(101,'Title02', 'conference02', '2020-02-05', 5)",
  "INSERT INTO Research_Papers VALUES(102,'Title03', 'conference03', '2020-02-05', 2)",
  "INSERT INTO Research_Papers VALUES(103,'Title04', 'conference04', '2020-02-05', 11)",
  "INSERT INTO Research_Papers VALUES(104,'Title05', 'conference05', '2020-02-05', 11)",
  "INSERT INTO Research_Papers VALUES(105,'Title06', 'conference06', '2020-02-05', 2)",
  "INSERT INTO Research_Papers VALUES(106,'Title07', 'conference07', '2020-02-05', 3)",
  "INSERT INTO Research_Papers VALUES(107,'Title08', 'conference08', '2020-02-05', 4)",
  "INSERT INTO Research_Papers VALUES(108,'Title09', 'conference09', '2020-02-05', 6)",
  "INSERT INTO Research_Papers VALUES(109,'Title10', 'conference10', '2020-02-05', 7)",
  "INSERT INTO Research_Papers VALUES(110,'Title11', 'conference11', '2020-02-05', 8)",
  "INSERT INTO Research_Papers VALUES(111,'Title12', 'conference12', '2020-02-05', 9)",
  "INSERT INTO Research_Papers VALUES(112,'Title13', 'conference13', '2020-02-05', 10)",
  "INSERT INTO Research_Papers VALUES(113,'Title14', 'conference14', '2020-02-05', 12)",
  "INSERT INTO Research_Papers VALUES(114,'Title15', 'conference15', '2020-02-05', 13)",
  "INSERT INTO Research_Papers VALUES(115,'Title16', 'conference16', '2020-02-05', 14)",
  "INSERT INTO Research_Papers VALUES(116,'Title17', 'conference17', '2020-02-05', 15)",
  "INSERT INTO Research_Papers VALUES(117,'Title18', 'conference18', '2020-02-05', 1)",
  "INSERT INTO Research_Papers VALUES(118,'Title19', 'conference19', '2020-02-05', 1)",
  "INSERT INTO Research_Papers VALUES(119,'Title20', 'conference20', '2020-02-05', 2);",
];

//Insert the values into Authers & Research_Papers
insertValue(authors_values);
insertValue(papers);

//Function to create table
function createQuery(sqlQuery) {
  connection.query(sqlQuery, (err, results, fields) => {
    if (err) {
      throw err;
    }
    console.log("Data added");
  });
}

//Function to insert values into tables
function insertValue(values) {
  values.forEach((element) => {
    connection.query(element, (err, results, fields) => {
      if (err) {
        throw err;
      }
    });
  });
  console.log("Value added...");
}
connection.end();
