var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    wrapAround: true,
    contain: true,
    pageDots: false,
    hash: true

});

var buttonReset = document.querySelector('.button');
    buttonReset.addEventListener('click', function(event) {
    flkty.selectCell(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});