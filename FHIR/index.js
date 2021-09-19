import app from './server.js';

const PORT = process.env.PORT || 9000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
