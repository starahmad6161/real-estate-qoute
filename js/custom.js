$(function () {
    

    
    let dataFRow;
    let dataSRow;


    $(".quote-quote-section .first-row .box-item img").on('click', function() {
        $(".quote-quote-section .second-row .box-item").removeClass('active');

        $('.quote-quote-section .inner-content .inner-box').hide();

        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        dataFRow = $(this).data('f-row');
        $('.quote-quote-section .second-row').addClass('active');
    });

    
    $(".quote-quote-section .second-row .box-item img").on('click', function() {
        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        dataSRow = $(this).data('s-row');

        $(this).parents('.rows-container').find(`.${dataFRow}${dataSRow}`).show().siblings('.inner-box').hide();
        
    });
});