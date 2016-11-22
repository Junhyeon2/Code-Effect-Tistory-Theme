$(document).ready(function(){ 
    $('.article-title').css('width', $(window).width()); 
    $('.article-title').css('height', $(window).height()); 
    $(window).resize(function() { 
        $('.article-title').css('width', $(window).width()); 
        $('.article-title').css('height', $(window).height()); 
    }); 
});