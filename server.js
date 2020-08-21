const express = require('express');
const app = express();
const cors = require('cors');
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST,PATCH GET, DELETE, OPTIONS');
//        next();
//  });

app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }));

const connect = require('./config/db');

connect();

app.use(express.json({ extended: false }));
app.get('/', (req, res) => {
  res.send('welcome!');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/workouts', require('./routes/api/workouts'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
