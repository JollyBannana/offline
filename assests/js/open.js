$( "div.two").css( "display", "none");

function sesamy() {
    $( "div.opening" ).css( "display", "block" );
    $( "div.opening" ).css( "display", "flex" );
    setTimeout(openstuff, 2000);
}

function openstuff() {
    $( "div.one" ).addClass( "fadeout" );
    setTimeout(last, 2000);
}

function last() {
    $( "div.opening" ).css( "display", "none" );
    $( "div.main" ).addClass( "fadein" );
    $( "div.main" ).css( "display", "block" );


}
