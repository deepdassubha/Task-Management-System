app.directive("assigntaskDirective", function (dataService, updationService) {
    return {
        restrict: "ACE",
        link: function (scope, elem, attrs) {
            scope.nameListArr = dataService.getStorageData();
            scope.nameArray = scope.nameListArr.assignmentPersonList;
            scope.submitName = function () {
                scope.nameListArr = dataService.storeNewName(scope.AssignedPerson);
                scope.nameArray = scope.nameListArr.assignmentPersonList;
                scope.AssignedPerson = '';
            };
        },

        templateUrl: "partials/popUpAssignTask.html"
    }
});