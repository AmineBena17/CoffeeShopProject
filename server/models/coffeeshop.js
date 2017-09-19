'use strict';

module.exports = function(Coffeeshop) {

  /*FILTERS Fields*/

  //filter by name
  Coffeeshop.getCoffeeshopByName = function (name, cb) {
    Coffeeshop.findOne({where: {nom : name}}, function (err, resultat) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, resultat);
      }
    });
  };

  //filter by city
  Coffeeshop.getCoffeeshopByVille = function (city, cb) {
    Coffeeshop.find({where: {ville: city}}, function (err, result) {
      if(err) {
        return cb(err);
      } else {
       return cb(null, result);
      }
    });
  };

  //filter by Commune
  Coffeeshop.getCoffeeshopByCommune = function (commune, cb) {
    Coffeeshop.find({where: {codepostal: commune}}, function (err, result) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, result);
      }
    });
  };

  //Remotes methodes
  Coffeeshop.remoteMethod(
    'getCoffeeshopByName',
    {
      http: {path: '/getCoffeeshopByName', verb: 'get'},
      accepts: {arg: 'nom', type: 'string', http: { source: 'query' } },
      returns: {arg: 'coffeshop', type: ['Coffeeshop'], root: 'true'}
    }
  );

  Coffeeshop.remoteMethod(
    'getCoffeeshopByVille',
    {
      http: {path: '/getCoffeeshopByVille', verb: 'get'},
      accepts: {arg: 'ville', type: 'string', http: { source: 'query' } },
      returns: {arg: 'coffeshop', type: ['Coffeeshop']}
    }
  );

  Coffeeshop.remoteMethod(
    'getCoffeeshopByCommune',
    {
      http: {path: '/getCoffeeshopByCommune', verb: 'get'},
      accepts: {arg: 'commune', type: 'number', http: { source: 'query' } },
      returns: {arg: 'coffeshop', type: ['Coffeeshop']}
    }
  );

};
