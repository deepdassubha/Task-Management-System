app.service('updationService', function (dataService) {
    var currentTaskArr;
    var currentNameArr;
    //var rePushTaskArr;
    return {
        uptodateTaskArray: function (appArr, index) {
            var taskArray = appArr.taskList;
            currentTaskArr = taskArray.splice(index, 1);
            appArr.taskList = taskArray;
            dataService.updateStorageData(appArr);

        },
        uptodateNameArray: function (appArr, index) {

            var nameArray = appArr.assignmentPersonList;
            console.log(nameArray)
            nameArray[index].task.push(currentTaskArr[0]);
            appArr.assignmentPersonList = nameArray;
            dataService.updateStorageData(appArr);

        }
//        uptodateTaskArrayToPushBack: function (appArr, index) {
//            var taskArray = appArr.taskList;
//            taskArray.push(currentNameArr[0]);
//            appArr.taskList = taskArray;
//            dataService.updateStorageData(appArr);
//
//        }
    }
});