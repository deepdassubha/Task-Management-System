app.service('updationService', function () {
    return {
        uptodateTaskArray: function (taskArray, index) {

            return taskArray.splice(index, 1);
        }
//        uptodateNameArray: function (nameArray, index) {
//            return nameArray.push(index, 1);
//             
//        }
    }
});