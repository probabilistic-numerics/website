$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).closest('.row').find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).closest('.row').find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
