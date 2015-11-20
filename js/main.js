
$(document).keydown(function(e) {

    var position = $('#charlie').position();

                
    switch(e.keyCode) {

        case 39: // right
        $('#charlie').css('left', position.left + 20 + 'px');
        break;

        case 37: // left
        $('#charlie').css('left', position.left - 20 + 'px');
    }

    return false;
});



