const customExpress = require('./config/customExpress');

const app = customExpress();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
