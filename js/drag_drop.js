$(document).click(function () {
    var swapObj;
    $(".table").draggable({
        helper: "clone",
        drag: function (event, ui) {
         
            swapObj = $(this).children();
        }
    } );
    

    $(".DivNameShow").droppable({
        activeClass: "ui-state-highlight",
        hoverClass: "ui-state-hover",
        accept: ".table:not('.clones')",
        drop: function (event, ui) {
            $(ui.draggable).addClass("x");
            $(this).append($(ui.draggable).clone().addClass('clones').removeClass('x'));
            $('.x').empty();

        }

    });

    $("#addTaskDiv").droppable({

        drop: function (event, ui) {
            $(ui.draggable).removeClass("clones");
            $(this).append($(ui.draggable));
        }

    });
});