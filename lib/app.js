const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

// app.use('/api/v1/RESOURCE', require('./routes/resource'));
app.use('/api/v1/tweets', require('./routes/tweets'));
// app.use('/api/v1/zoom', require('./routes/zoom'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
