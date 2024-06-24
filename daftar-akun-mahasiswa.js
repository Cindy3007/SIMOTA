const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'daftar-akun-mahasiswa.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/daftar-akun-mahasiswa.html`);
});