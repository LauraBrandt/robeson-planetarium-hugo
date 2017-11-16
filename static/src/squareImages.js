$(document).ready(function() {
    var dimension = $('.newsimg').width();
    $('.newsimg').height(dimension);
});

$(window).resize(function() {
    var dimension = $('.newsimg').width();
    $('.newsimg').height(dimension);
});
