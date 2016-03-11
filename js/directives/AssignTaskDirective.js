app.directive("assigntaskDirective", function (dataService, updationService, dragDropService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.nameListArr = dataService.getStorageData();
            scope.nameArray = scope.nameListArr.assignmentPersonList;
            scope.submitName = function () {
                scope.nameListArr = dataService.storeNewName(scope.AssignedPerson);
                scope.nameArray = scope.nameListArr.assignmentPersonList;
                console.log(scope.nameListArr);
                scope.AssignedPerson = '';
                dragDropService.dragDropOps(scope.nameListArr);
            };
            if (scope.nameArray !== undefined) {
                dragDropService.dragDropOps(scope.nameListArr);
            }
        },
        templateUrl: "partials/popUpAssignTask.html"
    }
});