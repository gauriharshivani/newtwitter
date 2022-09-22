//////////////
// Javascript for Posts page
//////////////

$(function() {
    // Executed when js-option-icon js is clicked
    $('.js-option-icon').click(function() {
        // $(this) : Self Element, namely div.js-option-icon
        // next() : Next to div.js-option-icon, namely div.option
        // toggle() : Switch show and hide 
        $(this).next().toggle();
    })
})