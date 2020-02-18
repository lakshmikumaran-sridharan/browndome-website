$(document).ready(function(){
    var $currDiv = $( "#start" );
    $currDiv.css( "background-color", "#d9e832" );
    var $currDiv2 = $( "#fund-feature" );
    $currDiv2.addClass('visible')

    $( "#next" ).click(function() {
        $currDiv  = $currDiv .next();
        $( "div" ).css( "background-color", "" );
        $currDiv.css( "background-color", "#d9e832" );

        $currDiv2  = $currDiv2 .next();
        $prevDiv2 = $currDiv2.prev()
        $prevDiv2.removeClass('visible')
        $prevDiv2.addClass('hidden')
        console.log($prevDiv2)
        $currDiv2.addClass("visible");

        
    });

    $( "#prev" ).click(function() {
        $currDiv  = $currDiv .prev();
        $( "div" ).css( "background", "" );
        $currDiv .css( "background", "#d9e832" );

        $currDiv2  = $currDiv2 .prev();
        $prevDiv2 = $currDiv2.next()
        $prevDiv2.removeClass('visible')
        $prevDiv2.addClass('hidden')
        console.log($prevDiv2)
        $currDiv2.addClass("visible");

    });


});


$(document).ready(function(){
    var $currDiv = $( "#people-start" );
    console.log($currDiv)
    $currDiv.addClass('visible')

    $( ".next_people" ).click(function() {

        $currDiv  = $currDiv .next();
        console.log($currDiv)
        $prevDiv = $currDiv.prev()
        $prevDiv.removeClass('visible')
        $prevDiv.addClass('hidden')
        $currDiv.addClass("visible");
    });

    $( ".prev_people" ).click(function() {
  

        $currDiv  = $currDiv .prev();
        $prevDiv = $currDiv.next()
        $prevDiv.removeClass('visible')
        $prevDiv.addClass('hidden')
        $currDiv.addClass("visible");

    });


});