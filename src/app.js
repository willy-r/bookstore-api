const customExpress = require('./config/customExpress');
const createDatabase = require('./infra/db');

const caminhoArqRel = 'db.sqlite3';
const db = createDatabase(caminhoArqRel);

const app = customExpress(db);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
