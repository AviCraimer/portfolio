$('document').ready(function () {


    //Smooth Scroll
    //Inspired by an example from StackOverflow

    $wholePage = $('html, body');

    //Select all anchor tags that begin with the # symbol and add click function to them.
    $('a[href^="#"]').click(function(){
        //Assign variable to the page ID in the href
        var the_id = $(this).attr("href");
        //Check it the ID is merely a placeholder, if not, then scroll page
        if (the_id !== '#') {
          $wholePage.animate({
              //Scroll to the offset from the top to the element with that ID.
              scrollTop:$(the_id).offset().top
          //Timing of the scroll is 0.7s
          }, 700);
      }
    });

});//End of document ready function