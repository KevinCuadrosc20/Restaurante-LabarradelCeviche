$(document).ready(function(){
    
    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ===================
    $('.categoria-lista .categoria_item[category="all"]').addClass('ct_item-active');

    // FILTRANDO PRODUCTOS ====================================
    $('.categoria_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.categoria_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTANDO PRODUCTOS ===============================
        $('.platillo-item').css('transform','scale(0)');
        function hideProduct(){
            $('.platillo-item').hide();
        } setTimeout(hideProduct,400);

        // MOSTRANDO PRODUCTOS ===============================
        function showProduct(){
           $('.platillo-item[category="'+catProduct+'"]').show();
           $('.platillo-item[category="'+catProduct+'"]').css('transform','scale(1)');
        } setTimeout(showProduct,400);

    });

    // MOSTRANDO TODOS LOS PRODUCTOS ===============================
    $('.categoria_item[category="all"]').click(function() {
        function showAll(){
            $('.platillo-item').show();
            $('.platillo-item').css('transform','scale(1)');
        } setTimeout(showAll,400);

    });


});