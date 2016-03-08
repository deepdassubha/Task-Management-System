app.directive("addtaskDirective", function ($filter, $window, dataService, dragDropService, updationService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.taskListArr = dataService.getStorageData();
            scope.taskArray = scope.taskListArr.taskList;
            // var updatedTaskArray=updationService.uptodateTaskArray(scope.taskArray, taskIndex);
            var taskIndex = dragDropService.dragDropOps();
           // dragDropService.dragDropOps();
            scope.taskArray = updationService.uptodateTaskArray(scope.taskArray, taskIndex);
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