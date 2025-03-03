const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "node" directory
app.use('/node', express.static(path.join(__dirname, 'node')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route to render the EJS file
app.get('/', (req, res) => {
    res.render('acasa');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});