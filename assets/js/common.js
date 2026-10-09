$(document).ready(function() {
    $('button.abstract, button.bibtex').click(function() {
        var kind = $(this).hasClass('abstract') ? 'abstract' : 'bibtex';
        var open = $(this).closest('.row').find('.' + kind + '.hidden').toggleClass('open').hasClass('open');
        $(this).toggleClass('active', open).attr('aria-expanded', open);
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
