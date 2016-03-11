app.service('dragDropService', function (dataService, updationService) {
    return {
        dragDropOps: function (appArr) {
            var taskIndex;
            var nameIndex;
            $(document).click(function () {
                var swapObj;
                $(".table").draggable({
                    helper: "clone",
                    start: function (event, ui) {
                        swapObj = $(this).children();
                        taskIndex = $(this).parent().attr('data-indexnumoftask');
                    }
                });


                $(".DivNameShow").droppable({
                    activeClass: "ui-state-highlight",
                    hoverClass: "ui-state-hover",
                    accept: ".table:not('.clones')",
                    drop: function (event, ui) {
                        $(ui.draggable).addClass("x");
                        $(this).append($(ui.draggable).clone().addClass('clones').removeClass('x'));
                        $('.x').empty();
                        nameIndex = $(this).attr('data-indexnumofname');
                        console.log(nameIndex);
                        updationService.uptodateTaskArray(appArr, taskIndex);
                        updationService.uptodateNameArray(appArr, nameIndex);
                    }

                });
                $("#addTaskDiv").droppable({

                    drop: function (event, ui) {
                        $(ui.draggable).removeClass("clones");
                        $(this).append($(ui.draggable));
                        //updationService.uptodateTaskArrayToPushBack(appArr, taskIndex);
                    }

                });


            });
        }
    }
});