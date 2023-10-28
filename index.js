import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import poll from './config/db.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
