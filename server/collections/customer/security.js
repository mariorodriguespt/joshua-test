Customers.allow({
   insert: function(userId){
       return !!userId;
   }
});