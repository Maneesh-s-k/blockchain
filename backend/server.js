require('dotenv').config(); // Loads .env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
  res.send('API is running and connected to MongoDB Atlas!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
