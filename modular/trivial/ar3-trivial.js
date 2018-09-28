{
    const constructNote = 'ar3-trivial_is_constructed',
        isConstructed = $('body').hasClass(constructNote);

    if (!isConstructed) {
        // 1. make sure the page is scaled for mobile device
        $('header').append('<meta name="viewport" content="width=device-width, initial-scale=1">');

        // 2. if the page is not English, by default every <i> is english
        {
            const isEnglish = $('body').attr('lang') == 'en';
            if (!isEnglish) {
                $('i').attr('lang', 'en');
            }
        }
    }

    $('body').addClass(constructNote);
}