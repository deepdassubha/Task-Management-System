app.directive("addtaskDirective", function ($filter, $timeout, dataService, updationService, dragDropService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.appArr = dataService.getStorageData();
            scope.taskArray = scope.appArr.taskList;
            scope.submitTask = function () {
                scope.date = $filter('date')(scope.TaskEndDate, 'dd-MM-yyyy');
                scope.appArr = dataService.storeNewTask(scope.TaskId, scope.TaskDescription, scope.date);
                scope.taskArray = scope.appArr.taskList;
                scope.TaskId = '';
                scope.TaskDescription = '';
                scope.TaskEndDate = '';
                console.log(scope.appArr);
                dragDropService.dragDropOps(scope.appArr);
            };
            if (scope.taskArray !== undefined) {
                dragDropService.dragDropOps(scope.appArr);
            }
        },
        templateUrl: "partials/popUpAddTask.html"
    }
});