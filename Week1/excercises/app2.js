const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
});

connection.connect();

// countries Above 8M:
connection.query(
  "SELECT Name from country WHERE Population > 8000000",
  function (error, results, fields) {
    if (error) throw error;
    const countriesAbove8M = [];
    results.forEach((element) => {
      countriesAbove8M.push(element.Name);
    });
    console.log("1-countries Above 8M: ", countriesAbove8M);
  }
);

// countriesContainsLand:
connection.query(
  'SELECT Name from country WHERE Name LIKE "%land%"',
  function (error, results, fields) {
    if (error) throw error;
    const countriesContainsLand = [];
    results.forEach((element) => {
      countriesContainsLand.push(element.Name);
    });
    console.log("2-countriesContainsLand: ", countriesContainsLand);
  }
);

// citiesBetweenHalfMAnd1M,
connection.query(
  "SELECT Name from city WHERE Population > 500000 AND Population < 1000000",
  function (error, results, fields) {
    if (error) throw error;
    const citiesBetweenHalfMAnd1M = [];
    results.forEach((element) => {
      citiesBetweenHalfMAnd1M.push(element.Name);
    });
    console.log("3-citiesBetweenHalfMAnd1M: ", citiesBetweenHalfMAnd1M);
  }
);

// countriesInEurope,
connection.query(
  "SELECT Name from country WHERE Continent LIKE 'Europe'",
  function (error, results, fields) {
    if (error) throw error;
    const countriesInEurope = [];
    results.forEach((element) => {
      countriesInEurope.push(element.Name);
    });
    console.log("4-countriesInEurope: ", countriesInEurope);
  }
);

//  countriesBySurfaceArea,
connection.query(
  "SELECT Name from Country ORDER BY -SurfaceArea DESC",
  function (error, results, fields) {
    if (error) throw error;
    const countriesBySurfaceArea = [];
    results.forEach((element) => {
      countriesBySurfaceArea.push(element.Name);
    });
    console.log(" 5-countriesBySurfaceArea: ", countriesBySurfaceArea);
  }
);

//  cities In Netherland:,
connection.query(
  " SELECT Name from City WHERE countryCode='NLD'",
  function (error, results, fields) {
    if (error) throw error;
    const citiesInNL = [];
    results.forEach((element) => {
      citiesInNL.push(element.Name);
    });
    console.log(" 6-citiesInNL: ", citiesInNL);
  }
);

//  population of Rotterdam:,
connection.query(
  "SELECT Population FROM city WHERE Name = 'Rotterdam'",
  function (error, result, fields) {
    if (error) throw error;

    console.log(" 7-populationRotterdam: ", result[0].Population);
  }
);

//  Top 10 countries by the surface area,
connection.query(
  " SELECT Name from Country ORDER BY -SurfaceArea Limit 10",
  function (error, results, fields) {
    if (error) throw error;
    const top10CountriesBySurfaceArea = [];
    results.forEach((element) => {
      top10CountriesBySurfaceArea.push(element.Name);
    });
    console.log(
      " 8-top10CountriesBySurfaceArea: ",
      top10CountriesBySurfaceArea
    );
  }
);

//  Top 10 cities by population:,
connection.query(
  " SELECT Name from city ORDER BY Population DESC Limit 10",
  function (error, results, fields) {
    if (error) throw error;
    const top10CitiesByPopulation = [];
    results.forEach((element) => {
      top10CitiesByPopulation.push(element.Name);
    });
    console.log("9- top10CitiesByPopulation: ", top10CitiesByPopulation);
  }
);

//  The total population in the world
connection.query(
  " SELECT SUM(Population) World_Population FROM Country",
  function (error, results, fields) {
    if (error) throw error;
    console.log("10- population Sum in world: ", results[0].World_Population);
  }
);

connection.end();
