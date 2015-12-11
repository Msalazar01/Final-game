$( '.start')
    .on('click', function(){

document.getElementById('peanuts').load();
document.getElementById('peanuts').play();

// Falling Snowflakes // 

    function fallingSnow() {
    
        var snowflake = $('<div class="snowflakes"></div>');
            snowX = Math.floor(Math.random() * $('.container').width());
            snowSpeed = Math.floor(Math.random() + 5000);

        
        $('#container').prepend(snowflake); 

        snowflake.css ({
            'left' : snowX + 'px',
            'top': '0'
        });

    }

    var timer = Math.floor(Math.random() * 5) + 3000;
    //var timer = 1;
    
    window.setInterval( function() {
        
        fallingSnow();
    
    }, timer);



    var dofall = function() {
        $('.snowflakes').css ({ 
                top: '+=1px'
            });

        $('.snowflakes').each(function() {
            //console.log('test')
            var top = parseInt($(this).css('top'));
            var left = parseInt($(this).css('left'));
            var cbrownleft = parseInt($('#charlie').css('left'));
            var cbrownright = $('#charlie').width() + cbrownleft;



            if (top > 250 && left > cbrownleft && left < cbrownright) {
                alert("Touch");
                 $(this).remove();

            }

            if (top > 340) {
                $(this).remove();
            }

        })
        
    }
    setInterval(dofall, 10);
       


// Moving Charlie //

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

// Time Counter

var secs = 0;
var mins = 0;

var timer = setInterval(function() {
    secs++;
    if (secs == 60) {
        mins++;
        secs = 0;

        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;

    }


    $("#timer").text(mins + ":" + secs)

}, 1000);



});







