const mysql = require('mysql');
const config = require('../server/serverConfig');

const connection = mysql.createConnection(config);


connection.connect(() => {
  console.log("database connected!")
})

// gets all baselines from database
const getAllBaselines = (callback) => {
  connection.query('SELECT * FROM baselines', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

// gets all goals from DB
const getAllGoals = (callback) => {
  connection.query('SELECT * FROM goals', (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

// adds baseline lift data to DB
const setBaseline = (liftData, callback) => {
  connection.query('INSERT INTO baselines (lift, weight, reps) VALUES (?, ?, ?)', [liftData.lift, liftData.weight, liftData.reps], (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

// adds goal lift data to DB
const setGoal = (liftData, callback) => {
  connection.query('INSERT INTO goals (lift, weight, reps) VALUES (?, ?, ?)', [liftData.lift, liftData.weight, liftData.reps], (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

module.exports = {
  getAllBaselines,
  getAllGoals,
  setBaseline,
  setGoal
}