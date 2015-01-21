
var addMetaDatatoDocument = function(userId, document){
    document.owner = userId;
    document.createAt = new Date();
};

Customers.before.insert(addMetaDatatoDocument);
