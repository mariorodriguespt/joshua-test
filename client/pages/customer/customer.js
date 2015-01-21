Template.customersView.helpers({
    customers : function(){
        return Customers.find();
    },

    isPremiumString : function(){
        return this.isPremium ? 'Yes' : 'No';
    }
});

//This is an hack because of Semantic UI
var saveNewUser = function(){
    if($('.ui.form').form('validate form')){
        //get form data
        var data  = $('.ui.form input').serializeArray(),
            insertObj = {};

        _.each(data, function(item){
            if (item.name=='isPremium'){
                insertObj['isPremium'] = item.value == 'on'
            }else{
                insertObj[item.name] = item.value;
            }
        });

        Customers.insert(insertObj);

        return true;
    }

    return false;
};

Template.customersView.events({
    'click #addCustomer': function(){
        //Clean up the form, in case it being used a second time
        $('#addCustomerModalForm form').trigger('reset');

        $('#addCustomerModalForm')
            .modal({
                closable  : false,
                onApprove: function(){
                    return saveNewUser();
                }
            })
            .modal('show')
    }
});

