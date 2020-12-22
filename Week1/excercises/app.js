const mysql = require("mysql");

// create the connection
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

// create Db
const createDb = function () {
  let sql = "CREATE DATABASE meetup";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`DATABASE created... ${result}`);
  });
};

// create invitee table
const createTable = function () {
  let sql =
    "CREATE TABLE Invitee(invitee_no int , invitee_name VARCHAR(10), invited_by VARCHAR(15) ) ";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Invite table created... ${result}`);
  });
};

// create Room table
const createRoomTable = function () {
  let sql =
    "CREATE TABLE Room(room_no INT , room_name VARCHAR(10), floor_number INT ) ";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Room table created... ${result}`);
  });
};

// create Meeting table
createMeetingTable = function () {
  let sql =
    "CREATE TABLE Meeting(meeting_no INT , meeting_title VARCHAR(10), starting_time DATETIME, ending_time  DATETIME , room_no INT ) ";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`Meeting table created... ${result}`);
  });
};

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

db.end();
