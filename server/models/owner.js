'use strict';

module.exports = function(Owner) {

  Owner.getOwnerByName = function (name, cb) {
    Owner.findOne({where: {nom: name}}, function (err, ownerFound) {
      if(err) {
        return cb(err);
      } else {
        return cb(null, ownerFound);
      }
    });
  }

  Owner.remoteMethod(
    'getOwnerByName',
    {
      http: {path: '/getOwnerByName', verb: 'get'},
      accepts: {arg: 'nom', type: 'string', http: { source: 'query' } },
      returns: {arg: 'owner', type: ['Owner'], root: 'true'}
    }
  );

  Owner.getOwnerByRole = function (role, cb) {
    Owner.find({where: {role: role}}, function (err, ownerFound) {
      if (err) {
        return cb(err);
      } else {
        return cb(null, ownerFound);
      }
    });
  }

  Owner.remoteMethod(
    'getOwnerByRole',
    {
      http: {path: '/getOwnerByRole', verb: 'get'},
      accepts: {arg: 'role', type: 'string', http: { source: 'query' } },
      returns: {arg: 'owner', type: 'Owner', root: 'true'}
    }
  );
};
