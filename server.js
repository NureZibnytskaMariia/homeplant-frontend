const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 8080;

const distPath = path.join(__dirname, 'dist');
const publicPath = fs.existsSync(path.join(distPath, 'index.html')) ? distPath : __dirname;

console.log(`Serving static files from: ${publicPath}`);

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
