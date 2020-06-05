const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 9000;
const queries = require('../database/queries.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/baselines', (req, res) => {
  queries.getAllBaselines((err, data) => {
    if (err) {
      res.status(500).send('could not get baselines from DB')
    } else {
      res.send(data);
    }
  })
});

app.get('/goals', (req, res) => {
  queries.getAllGoals((err, data) => {
    if (err) {
      res.status(500).send('could not get goals from DB')
    } else {
      res.send(data);
    }
  })
})

app.post('/baseline', (req, res) => {
  const liftData = req.body.baseline;
  console.log(liftData)
  queries.setBaseline(liftData, (err, data) => {
    if (err) {
      res.status(500).send('could not post baseline in DB')
    } else {
      res.send(data)
    }
  })
});

app.post('/goal', (req, res) => {
  queries.setGoal(req.body.goal, (err, data) => {
    if (err) {
      res.status(500).send('could not post goal in DB')
    } else {
      res.send(data)
    }
  })
});

app.delete(`/baseline`, (req, res) => {
  console.log(req.body)
  queries.deleteBaseline(req.body.lift, (err, data) => {
    if (err) {
      res.status(500).send('could not delete from DB')
    } else {
      res.send(data)
    }
  })
});

app.delete('/goal', (req, res) => {
  console.log(req.body)
  queries.deleteGoal(req.body.lift, (err, data) => {
    if (err) {
      res.status(500).send('could not delete from DB')
    } else {
      res.send(data)
    }
  })
});

app.put('/baseline', (req, res) => {
  console.log(req.body)
  queries.updateBaseline(req.body, (err, data) => {
    if (err) {
      res.status(500).send('could not post goal in DB')
    } else {
      res.send(data)
    }
  })
});

app.put('/goal', (req, res) => {
  res.send('update goal works!')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})