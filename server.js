'use strict';
//;/  (O_O) /;//
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received for our AWS test');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));