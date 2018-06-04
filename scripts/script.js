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


    const morphPath = "M4.558,37.621L6.105,40.148L37.079,90.865L38.244,92.815L66.207,98.863L67.109,97.788L93.005,68.811L94.214,67.451L92.666,64.924L59.53,10.962L58.364,9.012L33.375,4.857L32.474,5.932L5.766,36.26L4.558,37.621ZM13.951,42.596L29.051,43.2L50,75.21L41.085,85.593L13.951,42.596ZM12.467,35.382L33.055,12.62L39.641,23.865L28.448,36.288L12.467,35.382ZM35.181,42.466L44.552,31.975L63.05,61.795L54.49,70.933L35.181,42.466ZM46.484,89.646L53.641,81.275L60.601,91.969L46.484,89.646ZM37.716,9.73L50.124,12.181L43.468,19.556L37.716,9.73ZM56.958,77.855L68.161,65.539L84.433,66.438L63.645,89.714L56.958,77.855ZM48.379,27.667L57.145,17.857L82.657,59.231L67.557,58.628L48.379,27.667Z";

    const origPath ='M50,-0.601L47.837,0.841L1.683,31.731L0,32.813L0,67.188L1.683,68.269L47.837,99.159L50,100.601L52.163,99.159L98.317,68.269L100,67.188L100,32.813L98.317,31.731L52.163,0.841L50,-0.601ZM46.154,11.178L46.154,32.091L26.322,45.433L10.817,34.976L46.154,11.178ZM53.846,11.178L89.183,34.976L73.678,45.433L53.846,32.091L53.846,11.178ZM50,38.822L66.707,50L50,61.178L33.293,50L50,38.822ZM7.692,42.067L19.471,50L7.692,57.933L7.692,42.067ZM92.308,42.067L92.308,57.933L80.529,50L92.308,42.067ZM26.442,54.567L46.154,67.909L46.154,88.822L10.817,65.024L26.442,54.567ZM73.558,54.567L89.183,65.024L53.846,88.822L53.846,67.909L73.558,54.567Z';

    let codePenFlag = true;
    $('.codePen').hover(() => {
      if (codePenFlag) {
        codePenFlag = false;
        anime({
          targets: ['#codePen'],
          d: morphPath,
          duration: 500,
          loop: 1,
          // direction: "alternate",
          // easing: "linear"
          easing: "easeInSine"
        });
      }
    },
    () => {
      if (!codePenFlag) {

        anime({
          targets: ['#codePen'],
          d: origPath,
          duration: 500,
          loop: 1,
          // direction: "alternate",
          easing: "easeOutSine"
        });
        setTimeout(() => {
          codePenFlag = true;
        }, 500);
      }

    });



});//End of document ready function