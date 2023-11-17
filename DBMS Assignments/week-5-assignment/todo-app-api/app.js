const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(routes);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});
