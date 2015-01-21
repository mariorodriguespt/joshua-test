Router.configure({
    layoutTemplate : 'masterLayout',
    notFoundTemplate: 'notFound404',
    loadingTemplate: 'routeLoading'
});

Router.route('login',{
    path:'/',
    controller: 'LoginController'
});

Router.route('customers',{
    path:'/customers',
    controller:'CustomersController'
});

Router.onBeforeAction(function(){
    if(!Meteor.user() && !Meteor.loggingIn()){
        this.redirect('login');
    }

    this.next();
},{
    except: ['login']
});

Router.onBeforeAction(function(){
    if (Meteor.userId()){
        this.redirect('customers');
    }

    this.next();
},{
    only: ['login']
});
