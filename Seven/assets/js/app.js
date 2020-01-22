/* Fixed Header */
let header = $("#header");
let intro = $("#intro");
// let introH = intro.innerHeight();
let headerH = header.innerHeight();
let scrollPos = $(window).scrollTop();
let nav = $("#nav");
let navToggle = $("#navToggle");

checkScroll(scrollPos, headerH);

$(window).on("scroll resize", function() {
    headerH = header.innerHeight();
    // introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, headerH);
    console.log(scrollPos);
});

function checkScroll(scrollPos, headerH) {
    if( scrollPos > headerH ) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}
 /* Nav Toggle */
   
 navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
});