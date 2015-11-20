var conW = $(window).width() - $('.container').width();
// console.log (conW)

$(document).keydown(function(e) {

    var position = $('#charlie').position();
                
    switch(e.keyCode) {
        
        case 39: // right
        $('#charlie').css('left', position.left + 20 + 'px').removeClass('flip');
        break;

        case 37: // left
        $('#charlie').css('left', position.left - 20 + 'px').addClass('flip');
                         
    }


});

