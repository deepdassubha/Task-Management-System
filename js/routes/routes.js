app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            //            controller: 'popupcontroller',
            //            templateUrl: 'partials/popUpAddTask.html'

        })

    .otherwise({
        redirectTo: '/'
    });
});