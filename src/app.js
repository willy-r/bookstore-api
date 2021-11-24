const customExpress = require('./config/customExpress');

const dbFilePath = 'db.sqlite3';

const app = customExpress(dbFilePath);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
