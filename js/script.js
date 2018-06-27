'use sctrict';
(function(){ 
	var carouselGallery = document.getElementById('carousel-gallery').innerHTML; 	

	Mustache.parse(carouselGallery);
	
	var listGallery = '';
	
	for(var i = 0; i < carouselList.length; i++){
		console.log(carouselList);
		listGallery += Mustache.render(carouselGallery, carouselList[i]);
	}
	
})(); 

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