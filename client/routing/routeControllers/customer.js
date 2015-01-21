CustomersController = RouteController.extend({
    template:'customersView',

    waitOn: function(){
        if(!Meteor.user()){
            return [];
        }

        var customersSub = Meteor.subscribe('customers');

        return [
            customersSub
        ];
    }
});