
$(document).keydown(function(e) {

    var position = $('#charlie').position();
                
    switch(e.keyCode) {
        case 37: //left
        $('#charlie').css('left', position.left - 20 + 'px');
        break;

        case 39:
        $('#charlie').css('left', position.left + 20 + 'px');
        break;
                       
    }

    return false;
});

