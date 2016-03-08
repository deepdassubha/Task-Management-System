app.service('dragDropService', function () {
    return{
        dragDropOps: function () {
            $(".table").draggable({
                helper: "clone",
                drag: function (event, ui) {
                    this.swapObj = $(this).children();
                    this.taskIndex = $(this).parent().attr('data-indexnumoftask');
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
                    this.nameIndex = $(this).attr('data-indexnumofname');
                }

            });

            $("#addTaskDiv").droppable({

                drop: function (event, ui) {
                    $(ui.draggable).removeClass("clones");
                    $(this).append($(ui.draggable));
                }

            });
    
    }
    };
});







//    return {
//        dragDropOps: function () {
//            var taskIndex;
//            var nameIndex;
//            var swapObj;
//            $(".table").draggable({
//                helper: "clone",
//                drag: function (event, ui) {
//                    swapObj = $(this).children();
//                    taskIndex = $(this).parent().attr('data-indexnumoftask');
//                    return taskIndex;
//                }
//            }),
//
//
//            $(".DivNameShow").droppable({
//                activeClass: "ui-state-highlight",
//                hoverClass: "ui-state-hover",
//                accept: ".table:not('.clones')",
//                drop: function (event, ui) {
//                    $(ui.draggable).addClass("x");
//                    $(this).append($(ui.draggable).clone().addClass('clones').removeClass('x'));
//                    $('.x').empty();
//                    nameIndex = $(this).attr('data-indexnumofname');
//                    return nameIndex;
//                }
//
//            }),
//
//            $("#addTaskDiv").droppable({
//
//                drop: function (event, ui) {
//                    $(ui.draggable).removeClass("clones");
//                    $(this).append($(ui.draggable));
//                }
//
//            })
//        }
//
//    }