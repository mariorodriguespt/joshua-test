var addOwnertoDocument = function(userId, document){
    document.owner = userId;
};

Customers.before.insert(addOwnertoDocument);