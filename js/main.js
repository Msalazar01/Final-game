    $( '.start')
        .on('click', function(){

function fallingSnow() {
    
        var snowflake = $('<div class="snowflakes"></div>');
            snowX = Math.floor(Math.random() * $('.container').width());
            snowSpd = Math.floor(Math.random() + 5000);

        
        $('#container').prepend(snowflake); 

        snowflake.css ({
            'left' : snowX + 'px' 
        });

        snowflake.animate ({ 
            top: '340px', 

        }, 
            snowSpd, function() {
            
            $(this).remove();
            fallingSnow();
        });

    }

    var timer = Math.floor(Math.random() + 1000);
    
    window.setInterval( function() {
        
        fallingSnow();
    
    }, timer);


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
    };
};

});


});







