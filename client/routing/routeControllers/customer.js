CustomersController = RouteController.extend({
    template:'customersView',

    waitOn: function(){
        var customersSub = Meteor.subscribe('customers');

        return [
            customersSub
        ];
    }
});