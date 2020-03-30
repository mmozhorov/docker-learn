const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', express.static('dist'));

app.get('*', (request, response) => {
    response.sendFile(path.resolve('dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port!`)
});