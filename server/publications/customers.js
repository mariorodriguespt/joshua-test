Meteor.publish('customers', function(){
    if(!this.userId){
        this.ready();
    }

    var userId = this.userId;

    return Customers.find({
        owner: this.userId
    });
});