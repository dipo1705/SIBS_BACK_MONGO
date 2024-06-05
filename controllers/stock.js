const Thing = require('../models/thing');




exports.createThing = (req, res, next) => {
  const thing = new Thing({

    Banquedesang: req.body.Banquedesang,
    Type_Produit: req.body.Type_Produit,
    Groupe_Sanguin: req.body.Groupe_Sanguin,
    Rhésus: req.body.Rhésus,
    userId: req.body.userId,
    Prix: req.body.price
    
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Produit enregistré avec succès!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({

    id: req.params.id,
    Banquedesang: req.body.Banquedesang,
    Type_Produit: req.body.Type_Produit,
    Groupe_Sanguin: req.body.Groupe_Sanguin,
    Rhésus: req.body.Rhésus,
    Prix: req.body.price
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Produit mise à jour avec succès!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Supprimé!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllStuff = (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};