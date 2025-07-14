import express from 'express';
import path from 'path';
import url from 'url';


const app = express();
const PORT = 3000;

// Get current directory name
const fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);

 
// Tell Express to use the 'express.static' middleware
// to serve all files from the 'public' directory.
app.use(express.static(path.join(__dirname, 'public')));


// GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/**
 * GET /contact
  */ 
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});


// Start the server and have it listen for incoming connections
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
