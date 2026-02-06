$(document).ready(function () {

    /* Open lightbox on image click */
    $('.lightbox-toggle img').click(function () {

        $('.backdrop')
            .css('display', 'block')
            .animate({ 'opacity': '0.5' }, 300);

        $('.box').fadeIn();

        /* Remove existing image inside lightbox */
        if ($('.box').contents('img')) {
            $('.box').contents('img').remove();
        }

        /* Get alt text */
        var altValue = $(this).attr('alt');

        /* Match image and clone it */
        if (altValue === "Angkor Wat") {
            var img = $('#photo img').clone();
            $('.box').append(img);
        }
    });

    /* Close lightbox */
    $('.close, .backdrop').click(function () {

        $('.backdrop').animate({ 'opacity': '0' }, 300, function () {
            $(this).css('display', 'none');
        });

        $('.box').fadeOut();
    });

});
