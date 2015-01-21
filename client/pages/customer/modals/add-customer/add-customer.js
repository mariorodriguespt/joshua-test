Template.addCustomerModal.events({
    'click #saveNewCustomer': function(event){
        event.preventDefault();

        alert('save to meteor');
    }
});

Template.addCustomerModal.rendered = function(){
    this.$('.ui.checkbox').checkbox();

    this.$('.ui.form')
        .form({
            email: {
                identifier : 'email',
                rules: [
                    {
                        type   : 'email',
                        prompt : 'Please enter a valid e-mail'
                    }
                ]
            }
        })
    ;
};