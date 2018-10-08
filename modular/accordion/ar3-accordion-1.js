/*######################
// ar3-accordion-1.js  #
######################*/
/*--------------------------
https://arza-3d.github.io/ar3.js/

<script src="https://rawgit.com/Arza-3d/ar3.js/master/modular/accordion/ar3-accordion-1.js"></script>
--------------------------*/

{
    let accordTarget = $('body').attr('data-accordion-r3'),
        isValid = accordTarget !== undefined;
    if (isValid) {
        $(accordTarget).addClass('r3-accordion');
    }

    $('.r3-accordion').click(function() {
        $(this).toggleClass('r3-active').next().slideToggle('slow');
    });
}
