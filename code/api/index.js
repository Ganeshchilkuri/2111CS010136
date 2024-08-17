const express = require('express');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const server = express();

server.use('/api', app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
