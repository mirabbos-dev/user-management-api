const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));

app.use('/users', userRoutes);


const PORT = process.env.PORT || 3000;
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync();
    })
    .then(() => console.log('Models synced to the database.'))
    .catch((err) => console.error('Error connecting to the database:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
