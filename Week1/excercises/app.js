const mysql = require("mysql");

// Make the connection
const db = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  // database: "meetup",
});

// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql is connected");
});

// Create a database called meetup
const createDb = "CREATE DATABASE IF NOT EXISTS meetup;";
doQuery(createDb);

// create invitee table
const invitee =
  "CREATE TABLE IF NOT EXISTS Invitee(invitee_no int, invitee_name VARCHAR(200), invited_by VARCHAR(200));";
doQuery(invitee);

// create Room table
const room =
  "CREATE TABLE IF NOT EXISTS Room(room_no INT , room_name VARCHAR(200), floor_number INT );";
doQuery(room);

// create Meeting table
const meeting =
  "CREATE TABLE IF NOT EXISTS Meeting(meeting_no INT , meeting_title VARCHAR(200), starting_time DATETIME, ending_time  DATETIME, room_no INT ) ";
doQuery(meeting);

// insert to the invitee table
const invite = [
  [1, "Ismaiel", "Alnabwani"],
  [2, "Omran", "Alnabwani"],
  [3, "Salim", "Janbih"],
  [4, "Walid", "Hasson"],
  [5, "Hassan", "Abas"],
];
const sqlInvit =
  "INSERT IGNORE INTO Invitee (invitee_no  , invitee_name , invited_by ) VALUES ?";
insertValues(sqlInvit, invite);

// insert to the room table
const rooms = [
  [1, "confirnce", 10],
  [2, "Skyroom", 50],
  [3, "heaven", 8],
  [4, "sport", 22],
  [5, "suite", 40],
];
const sqlRoom =
  "INSERT IGNORE INTO Room (room_no , room_name , floor_number ) VALUES ?";
insertValues(sqlRoom, rooms);

// insert to the meeting table
const meetings = [
  [11, "tranning", "2020-04-06 10:10:23", "2020-04-06 11:10:23", 12],
  [14, " intro", "2020-07-07 14:10:00", "2020-07-07 16:10:00", 40],
  [29, "breafing", "2020-08-02 10:40:00", "2020-08-02 13:40:00", 3],
  [30, "consolting", "2020-09-07 13:00:00", "2020-09-07 15:00:00", 5],
  [58, "cebration", "2020-11-07 09:10:00", "2020-11-07 12:10:00", 9],
];
const sqlMeet =
  "INSERT IGNORE INTO Meeting (meeting_no , meeting_title , starting_time , ending_time , room_no ) VALUES ?";
insertValues(sqlMeet, meetings);

//function to do query
function doQuery(queryD) {
  db.query(queryD, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Table ");
  });
}

//function to insert values to tables
function insertValues(sqlS, data) {
  db.query(sqlS, [data], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
}

db.end();
