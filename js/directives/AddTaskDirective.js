app.directive("addtaskDirective", function ($filter, dataService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.taskListArr = dataService.getStorageData();
            scope.taskArray = scope.taskListArr.taskList;
            scope.submitTask = function () {
                scope.date = $filter('date')(scope.TaskEndDate, 'dd-MM-yyyy');
                scope.taskListArr = dataService.storeNewTask(scope.TaskId, scope.TaskDescription, scope.date);
                scope.taskArray = scope.taskListArr.taskList;

                scope.TaskId = '';
                scope.TaskDescription = '';
                scope.TaskEndDate = '';
            };
        },
        templateUrl: "partials/popUpAddTask.html"
    }
});