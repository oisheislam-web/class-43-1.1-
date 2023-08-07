$(function(){

    $('#white').click(white);
    $('#darkolivegreen').click(darkolivegreen);
    $('#black').click(black);
    $('#maroon').click(maroon);
    $('#darkblue').click(darkblue);

    function white() {
        $('body').attr('class', 'white');
    }

    function darkolivegreen() {
        $('body').attr('class', 'darkolivegreen');
    }

    function black() {
        $('body').attr('class', 'black');
    }

    function maroon() {
        $('body').attr('class', 'maroon');
    }

    function darkblue() {
        $('body').attr('class', 'darkblue');
    }

})