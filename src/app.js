const customExpress = require('./config/customExpress');

// Creates the app passing false as argument,
// meaning that should not create the test db.
const app = customExpress(false);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
