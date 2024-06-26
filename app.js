const express = require('express');

const app = express();

const mongoose = require('mongoose');

const stockfRoutes = require('./routes/stock');
const userRoutes = require('./routes/user');



mongoose.connect('mongodb+srv://didierdipondo:jeanne1705@cluster0.ehwqqeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/stock', stockfRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;