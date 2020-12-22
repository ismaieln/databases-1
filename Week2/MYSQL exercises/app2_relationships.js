const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "ismaiel_db",
});

connection.connect();

// Create a table Authors
let Authors = [
  `CREATE TABLE IF NOT EXISTS Authors (author_no INT PRIMARY KEY AUTO_INCREMENT, 
      author_name VARCHAR(200), 
      university VARCHAR(200), 
      date_of_birth DATE, 
      h_index INT, 
      gender ENUM('m','f'))`,
  `ALTER TABLE Authors (ADD collaborator INT, ADD CONSTRAINT FK_collaborator FOREIGN KEY (collaborator) REFERENCES Authors(author_no))`,
];

Authors.forEach((elem) => {
  connection.query(elem, (error, results, fields) => {
    if (error) {
      throw error;
    }
    console.log("Table created ", results);
  });
});

//Create a table Research_Papers
let Research_Papers = `CREATE TABLE IF NOT EXISTS Research_Papers(paper_id INT PRIMARY KEY AUTO_INCREMENT, 
  paper_title VARCHAR(200), 
  conference VARCHAR(200), 
  publish_date DATE, 
  FOREIGN KEY(author_no) REFERENCES Authors(author_no))`;

connection.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
  if (error) throw error;
  console.log("Table created", results);
});

//Values for Authors
let authors_values = `INSERT INTO Authors VALUES
('Ismaiel01','Damascus','1969-12-05',25,'m', NULL),
('Ismaiel02','Haarlem','1973-03-05',12,'m', NULL),
('Ismaiel03','Amsterdam','1978-04-05',13,'m', NULL),
('Ismaiel04','Leiden','1962-07-05',22,'m', NULL),
('Locy05','Damascus','1965-11-05',34,'f', NULL),
('Ismaiel06','Dusiburg','1981-10-05',47,'m', NULL),
('Ismaiel07','Bielefeid','1971-09-05',15,'m', NULL),
('Ismaiel08','Saxion','1979-12-05',22,'m', NULL),
('Locy09','Birmingham','1996-12-05',05,'f', NULL),
('Ismaiel10','Oxford','1986-12-05',14,'m', NULL),
('Ismaiel11','Cairo','1975-12-05',18,'m', NULL),
('Locy12','Dusiburg','1959-12-05',47,'f', NULL),
('Ismaiel13','Hyderabad','1985-01-25',85,'m', NULL),
('Ismaiel14','Osaka','1992-05-05',45,'m', NULL),
('Locy15','Kyoto','1947-02-15',55,'f', NULL);
`;

//Values for research_Papers
let researchPapers = `INSERT INTO Research_Papers VALUES
('Title01', 'conference01', '2020-02-05', NULL),
('Title02', 'conference02', '2020-02-05', NULL),
('Title03', 'conference03', '2020-02-05', NULL),
('Title04', 'conference04', '2020-02-05', NULL),
('Title05', 'conference05', '2020-02-05', NULL),
('Title06', 'conference06', '2020-02-05', NULL),
('Title07', 'conference07', '2020-02-05', NULL),
('Title08', 'conference08', '2020-02-05', NULL),
('Title09', 'conference09', '2020-02-05', NULL),
('Title10', 'conference10', '2020-02-05', NULL),
('Title11', 'conference11', '2020-02-05', NULL),
('Title12', 'conference12', '2020-02-05', NULL),
('Title13', 'conference13', '2020-02-05', NULL),
('Title14', 'conference14', '2020-02-05', NULL),
('Title15', 'conference15', '2020-02-05', NULL),
('Title16', 'conference16', '2020-02-05', NULL),
('Title17', 'conference17', '2020-02-05', NULL),
('Title18', 'conference18', '2020-02-05', NULL),
('Title19', 'conference19', '2020-02-05', NULL),
('Title20', 'conference20', '2020-02-05', NULL);
`;

//Insert the values into Authers & Research_Papers
insertValue(authors_values);
insertValue(researchPapers);

//Function to insert values into tables
function insertValue(values) {
  values.forEach((elem) => {
    connection.query(elem, (error, results, fields) => {
      if (error) {
        throw error;
      }
      console.log("Value added...", results);
    });
  });
}

connection.end();
