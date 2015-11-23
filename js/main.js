
$(document).keydown(function(e) {

var position = $('#charlie').position(),
    charlieW = $('#charlie').width() - 20,
    contW = $('.container').width(),
    step = 20;

switch(e.keyCode) {

    case 39: // right
    if ( position.left + charlieW + step < contW ) {
        $('#charlie').css('left', position.left + step + 'px').removeClass('flip');
    }
    break;

    case 37: // left
    if ( position.left - step > 0 ) {
        $('#charlie').css('left', position.left - step + 'px').addClass('flip');
    }

}

});