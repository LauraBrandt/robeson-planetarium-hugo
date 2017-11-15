$(document).ready(function() {

    $("#slides div:first-child").addClass("showing");

    var numSlides = $(".slide").length;

    // create dots at bottom
    var dotsHTML = "";
    for (var i=0; i<numSlides; i++) {
        dotsHTML += "<span class='dot' id='" + i + "'></span>";
    }
    $("#dots").html(dotsHTML);
    $("#0").addClass("active");
    
    // center all images
    $(".slide img").each(function() {
        centerImage(this)
    });

    function centerImage(img) {
        //console.log(img);
        var containerWidth = $('#slideshow-container').innerWidth();
        var containerHeight = $('#slideshow-container').innerHeight();
        //console.log("container dimensions:" , containerWidth, containerHeight);
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        //console.log("image dimensions: ", w, h, img.width, img.height);
        if (w<containerWidth && h<containerHeight) {  // smaller than the container
            var left = ((containerWidth-w)/2.0).toFixed(0) + "px";
            var top = ((containerHeight-h)/2.0).toFixed(0) + "px";
            $(img).parent()[0].style.left = left;
            $(img).parent()[0].style.top = top;
        } else if ((w/h)>(containerWidth/containerHeight)) {  // larger than container; when resized it's full width but less than full height
            var new_h = containerWidth*h/w;
            var top = ((containerHeight-new_h)/2.0).toFixed(0) + "px";
            $(img).parent()[0].style.top = top;
        } else if ((w/h)<(containerWidth/containerHeight)) {  // larger than container; when resized it's full height but less than full width
            var new_w = containerHeight*w/h;
            var left = ((containerWidth-new_w)/2.0).toFixed(0) + "px";
            $(img).parent()[0].style.left = left;
        }
    }
    
    var currentSlide = 0;

    // start animation
    var slideInterval = setInterval(nextSlide,4000,1);
    
    // functions and events

    function nextSlide(n) {
        if (currentSlide+n < 0){
            currentSlide = numSlides-1;
        } else {
            currentSlide = (currentSlide+n)%numSlides;
        }
        showSlide();
    }
    
    function showSlide() {
        $("#dots").find(".dot").removeClass("active");
        $("#dots").find("#"+currentSlide).addClass("active");
        $(".slide").each(function() {
            $(this).removeClass('showing');
        });
        $(".slide:eq("+currentSlide+")").addClass('showing');
    }

     $("#next").click(function(){
        nextSlide(1);
    });
    
    $("#prev").click(function(){
        nextSlide(-1);
    });
    
    $(".dot").click(function(){
        $(".dot").removeClass("active");
        $(this).addClass("active");
        currentSlide = Number($(this).attr("id"));
        showSlide();
    });
    
    var playing = true;
    $("#pause").click(function() {
        if (playing) {
            playing = false;
            clearInterval(slideInterval);
            $(this).html("<i class='fa fa-play' aria-hidden='true'></i>");
        } else {
            playing = true;
            slideInterval = setInterval(nextSlide,4000,1);
            $(this).html("<i class='fa fa-pause' aria-hidden='true'></i>");
        }
    });
    
    $(window).resize(function(){
        console.log("window resized")
        $(".slide img").each(function() {
            centerImage(this)
        });
    });

});