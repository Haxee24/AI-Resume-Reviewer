import app from './src/app.js';
import dotenv from 'dotenv/config';
import connectDB from './src/config/db.js';

// Connect to MongoDB
connectDB();

const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});