const mysql = require("mysql");

// Make the connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Omran2003",
  database: "meetup",
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
meeting =
  "CREATE TABLE IF NOT EXISTS Meeting(meeting_no INT , meeting_title VARCHAR(200), starting_time DATETIME, ending_time  DATETIME, room_no INT ) ";
doQuery(meeting);

// insert to the invitee table
insertDataToTable = function () {
  let invite = [
    [1, "Ismaiel", "Alnabwani"],
    [2, "Omran", "Alnabwani"],
    [3, "Salim", "Janbih"],
    [4, "Walid", "Hasson"],
    [5, "Hassan", "Abas"],
  ];
  let sql =
    "INSERT INTO Invitee (invitee_no  , invitee_name , invited_by ) VALUES ?";
  let query = db.query(sql, [invite], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Invitations sent... ${result}`);
  });
};

// insert to the room table
const insertValueToRoomTable = function () {
  let rooms = [
    [1, "confirnce", 10],
    [2, "Skyroom", 50],
    [3, "heaven", 8],
    [4, "sport", 22],
    [5, "suite", 40],
  ];
  let sql = "INSERT INTO Room (room_no , room_name , floor_number ) VALUES ?";
  let query = db.query(sql, [rooms], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`room records inserted... ${result}`);
  });
};

// insert to the meeting table
const insertValueToMeetingTable = function () {
  let meeting = [
    [11, "tranning", "2020-04-06 10:10:23", "2020-04-06 11:10:23", 12],
    [14, " intro", "2020-07-07 14:10:00", "2020-07-07 16:10:00", 40],
    [29, "breafing", "2020-08-02 10:40:00", "2020-08-02 13:40:00", 3],
    [30, "consolting", "2020-09-07 13:00:00", "2020-09-07 15:00:00", 5],
    [58, "cebration", "2020-11-07 09:10:00", "2020-11-07 12:10:00", 9],
  ];
  let sql =
    "INSERT INTO Meeting (meeting_no , meeting_title , starting_time , ending_time , room_no ) VALUES ?";
  let query = db.query(sql, [meeting], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`meeting records inserted... ${result} `);
  });
};

function doQuery(queryD) {
  db.query(queryD, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Done");
  });
}

db.end();
