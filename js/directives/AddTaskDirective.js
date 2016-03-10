app.directive("addtaskDirective", function ($filter, $timeout, dataService, updationService, dragDropService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.appArr = dataService.getStorageData();
            scope.taskArray = scope.appArr.taskList;
            scope.submitTask = function () {
                scope.date = $filter('date')(scope.TaskEndDate, 'dd-MM-yyyy');
                scope.taskListArr = dataService.storeNewTask(scope.TaskId, scope.TaskDescription, scope.date);
                scope.taskArray = scope.taskListArr.taskList;
                scope.TaskId = '';
                scope.TaskDescription = '';
                scope.TaskEndDate = '';
            };
            $timeout(function () {
                dragDropService.dragDropOps(scope.appArr);
            }, 0);
        },
        templateUrl: "partials/popUpAddTask.html"
    }
});