const customExpress = require('./config/customExpress');

const app = customExpress();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('It worked!');
});

app.listen(PORT, () => console.log(`Server running at: http://localhost:${PORT}`));
