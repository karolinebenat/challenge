const express = require('express');
const cors = require('cors');
const githubRoutes = require('./routes/githubRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('', githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
