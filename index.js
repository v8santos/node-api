require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const homeRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});