const express = require('express');

const app = express();

const mongoose = require('mongoose');

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


app.post('/api/stock', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'produit sanguin créé !'
  });
});


app.get('/api/stock', (req, res, next) => {

  const stock = [
    {
      "id": "1",
      "Banquedesang":"Maman Yemo",
      "Type_Produit": "sang entier",
      "Groupe_Sanguin":"O+",
      "Rhésus":"O+",
      "Quantité_Disponible":"10",
      "Prix":"25$"
      
  },

  {
      "id": "2",
      "Banquedesang":"Roi Baudouin",
      "Type_Produit": "globules rouges",
      "Groupe_Sanguin":"A+",
      "Rhésus":"A+",
      "Quantité_Disponible":"30",
      "Prix":"45$"
  },

  {
  "id": "3",
  "Banquedesang":"Mabanga",
  "Type_Produit": "plaquettes",
  "Groupe_Sanguin":"AB+",
  "Rhésus":"AB+",
  "Quantité_Disponible":"50",
  "Prix":"40$"
  },

  {
      "id": "4",
      "Banquedesang":"Mabanga",
      "Type_Produit": "plaquettes",
      "Groupe_Sanguin":"AB+",
      "Rhésus":"AB+",
      "Quantité_Disponible":"50",
      "Prix":"40$"
      },

      {
          "id": "5",
          "Banquedesang":"Mabanga",
          "Type_Produit": "plaquettes",
          "Groupe_Sanguin":"AB+",
          "Rhésus":"AB+",
          "Quantité_Disponible":"50",
          "Prix":"40$"
          }  
  ];
  res.status(200).json(stock);
});

module.exports = app;