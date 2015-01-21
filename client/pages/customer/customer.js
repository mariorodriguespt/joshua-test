Template.customersView.helpers({
    customers : function(){
        return Customers.find();
    }
});

Template.customersView.events({
    'click #addCustomer': function(){
        //Clean up the form, in case it being used a second time
        $('#addCustomerModalForm form').trigger('reset');

        $('#addCustomerModalForm')
            .modal('setting', 'closable', false)
            .modal('show');
    }
});
