app.service('dataService', function () {
    return {
        storeNewTask: function (TaskId, TaskDescription, TaskEndDate) {
            var newTaskDetails = {
                newTaskIdNo: TaskId,
                newTaskDescription: TaskDescription,
                newTaskDate: TaskEndDate
            };
            var newTaskDetailsObj = this.getStorageData();
            if (newTaskDetailsObj.taskList === undefined) {
                newTaskDetailsObj.taskList = [];
                newTaskDetailsObj.taskList.push(newTaskDetails);
                this.updateStorageData(newTaskDetailsObj);
                return newTaskDetailsObj;
            } else {
                newTaskDetailsObj.taskList.push(newTaskDetails);
                this.updateStorageData(newTaskDetailsObj);
                return newTaskDetailsObj;
            }
        },

        storeNewName: function (AssignedPerson) {
            var assignmentPersonObj = this.getStorageData();
            var assignmntPrsn = {
                name: AssignedPerson,
                task: []
            };

            if (assignmentPersonObj.assignmentPersonList === undefined) {
                assignmentPersonObj.assignmentPersonList = [];
                assignmentPersonObj.assignmentPersonList.push(assignmntPrsn);
                this.updateStorageData(assignmentPersonObj);
                return assignmentPersonObj;
            } else {
                assignmentPersonObj.assignmentPersonList.push(assignmntPrsn);
                this.updateStorageData(assignmentPersonObj);
                return assignmentPersonObj;
            }
        },

        updateStorageData: function (dataStorageObject) {
            if (window.localStorage && dataStorageObject) {
                localStorage.setItem("appStorage", angular.toJson(dataStorageObject));
            }
        },

        getStorageData: function () {
            var appStorageObject = angular.fromJson(localStorage.getItem("appStorage"));
            return appStorageObject ? appStorageObject : {};
        }
    };

});