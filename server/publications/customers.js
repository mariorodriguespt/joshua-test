Meteor.publish('customers', function(){
    if(!this.userId){
        console.error('Someone try to access "customers" subscription without login.');
        this.ready();
    }

    var userId = this.userId;

    return Customers.find({
        owner: this.userId
    });
});