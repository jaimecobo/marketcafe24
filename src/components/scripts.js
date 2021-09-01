

    // Change navbar color when scrolling down
    $(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 1);
    $('img').toggleClass('scrolled', $(this).scrollTop() > 1);
    });
   
    $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
    });


    
    //Get the button
    var mybutton = document.getElementById("toTopBtn");
      
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }

