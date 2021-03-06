/*################
// ar3-tab-1.js  #
################*/
/*--------------------------
https://arza-3d.github.io/ar3.js/

<script src="https://raw.githack.com/Arza-3d/ar3.js/master/modular/tab/ar3-tab-1.js"></script>
--------------------------*/

{
    const constructNote = 'r3-tab_done',
        isConstructed = $('body').hasClass(constructNote);

    {
        const $contents = $('.tab-r3 > div > div'),
              $links = $('.tab-r3 > nav > a');

        if (!isConstructed) {
            for (let i = 0; i < $contents.length; i++) {
                if ($($contents[i]).attr('id') == undefined) {
                    $($contents[i]).attr('id', 'r3_tab_content_'+ i);
                }
            }

            let id;
            for (let i = 0; i < $contents.length; i++) {
                id = $($contents[i]).attr('id');
                $links[i].setAttribute('data-tab-r3', id);
            }
        } else {
            $links.removeClass('r3-active');
            $('.tab-r3 > div > div').css('display', 'none');
            $('.tab-r3 > div > div:first-child').css('display', 'block');
        }
        const $1stLink = $('.tab-r3 > nav > a:first-child');
        $1stLink.addClass('r3-active');

        $links.click(function() {
            if (!$(this).hasClass('r3-active')) {
                let id = $(this).attr('data-tab-r3');
                $(this).siblings().removeClass('r3-active');
                $(this).addClass('r3-active');
                $('#'+id).siblings().fadeOut(400);
                $('#'+id).delay(401).fadeIn();
            }
        });
    }

    $('body').addClass(constructNote);
}
