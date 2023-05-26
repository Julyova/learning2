
const overlay = $('#overlay');
const open_modal = $('.open_modal');
const close = $('.modal_close, #overlay');
const modal = $('.modal_div');

open_modal.click(function (event) {
    event.preventDefault();
    const div = $(this).attr('href');
    overlay.fadeIn(400,
        function () {
            $(div)
                .css('display', 'block')
                .animate({ opacity: 1, top: '50%' }, 200);
        });
});

close.click(function () {
    modal
        .animate({ opacity: 0, top: '45%' }, 200,
            function () {
                $(this).css('display', 'none');
                overlay.fadeOut(400);
            }
        );
});
