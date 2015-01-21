Template.addCustomerModal.rendered = function(){
    this.$('.ui.checkbox').checkbox();

    var validationRules = {
        name:{
            identifier:'name',
            rules:[
                {
                    type:'empty',
                    prompt:'You need to provide a name'
                }
            ]
        },
        city:{
            identifier:'city',
            rules:[
                {
                    type:'empty',
                    prompt:'You need to provide a city'
                }
            ]
        },
        email: {
            identifier: 'email',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter an email'
                },
                {
                    type: 'email',
                    prompt: 'Invalid email'
                }
            ]
        }
    };

    this.$('.ui.form')
        .form(validationRules,{
            inline: true,
            on: 'blur',
            revalidate: true
        });
};