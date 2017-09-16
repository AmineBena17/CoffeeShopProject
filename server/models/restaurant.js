'use strict';

module.exports = function(Restaurant) {
  //filter by name
  Restaurant.getRestaurantByName = function (name, cb) {
    Restaurant.findOne({where: {nom : name}}, function (err, resultat) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, resultat);
      }
    });
  };

  //filter by city
  Restaurant.getRestaurantByVille = function (city, cb) {
    Restaurant.find({where: {ville: city}}, function (err, result) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, result);
      }
    });
  };

  //filter by Commune
  Restaurant.getRestaurantByCommune = function (commune, cb) {
    Restaurant.find({where: {codepostal: commune}}, function (err, result) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, result);
      }
    });
  };

  //Remotes methodes
  Restaurant.remoteMethod(
    'getRestaurantByName',
    {
      http: {path: '/getRestaurantByName', verb: 'get'},
      accepts: {arg: 'nom', type: 'string', http: { source: 'query' } },
      returns: {arg: 'restaurant', type: ['Restaurant'], root: 'true'}
    }
  );

  Restaurant.remoteMethod(
    'getRestaurantByVille',
    {
      http: {path: '/getRestaurantByVille', verb: 'get'},
      accepts: {arg: 'ville', type: 'string', http: { source: 'query' } },
      returns: {arg: 'restaurant', type: ['Restaurant']}
    }
  );

  Restaurant.remoteMethod(
    'getRestaurantByCommune',
    {
      http: {path: '/getRestaurantByCommune', verb: 'get'},
      accepts: {arg: 'commune', type: 'number', http: { source: 'query' } },
      returns: {arg: 'restaurant', type: ['Restaurant']}
    }
  );

};
