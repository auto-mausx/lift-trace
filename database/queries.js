const mysql = require('mysql');
const config = require('../server/serverConfig');

const connection = mysql.createConnection(config);

// connection.connect();
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
  console.log("database connected!")
  }
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
  console.log(liftData)
  console.log(liftData.lift, liftData.weight, liftData.reps)
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

const deleteBaseline = (data, callback) => {
  connection.query('DELETE FROM baselines WHERE lift = (?)', [data], (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const deleteGoal = (data, callback) => {
  connection.query('DELETE FROM goals WHERE lift = (?)', [data], (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
};

const updateBaseline = (liftData, callback) => {
  console.log(liftData)
  connection.query('UPDATE baselines SET weight=(?) WHERE lift=(?)', [liftData.weight, liftData.lift], (err, data) => {
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
  setGoal,
  deleteBaseline,
  deleteGoal,
  updateBaseline
}