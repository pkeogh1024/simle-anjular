'use strict';
//create out "MyApp" angular application with the
// 'ui router' as a dependency.
var app = angular.module ('MyApp', ['ui.router']);

//Configure the 'MyApp' angular application.
app.config([
    //Bring in the dependency objects by name.
    '$stateProvider',

    //Provide a callback function to use one all
    //the dependencies have been loaded.
    function ($stateProvider) {
        //Setup and define out page states.
        $stateProvider
            .state ('home',{
                url: '/',
                // template:'<h2>Home Page</h2>'
                templateUrl: '/templates/home.html'
        })
            .state ('about', {
                url: '/about',
                // template: '<h2>About Page</h2>'
                templateUrl: '/templates/about.html'
        })
            .state ('contact',{
                url: '/contact',
                // template: '<h2>Contact Page</h2>'
                templateUrl: '/templates/contact.html'
        })
        ;
    }
])
