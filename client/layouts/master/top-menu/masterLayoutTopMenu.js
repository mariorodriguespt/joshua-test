Template.masterLayoutTopMenu.events({
    'click #topMenu-Logout': function(){
        //The iron router before hook will take of redirecting our beloved user to the login page.
        Meteor.logout();
    }
});

Template.masterLayoutTopMenu.rendered = function(){
    $('.dropdown').dropdown();
};
