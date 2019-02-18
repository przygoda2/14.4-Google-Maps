window.initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: data[0].coords
  });
  var marker = [];
  for (i = 0; i < data.length; i++) {
    var marker = new google.maps.Marker({
      position: data[i].coords,
      map: map
    });
  }
}

var templateSlide = document.getElementById('templateCarousel').innerHTML;
var carousel = document.querySelector('.main-carousel');

Mustache.parse(templateSlide);
var renderedTemplates = '';

for (var i = 0; i < data.length; i++) {
  renderedTemplates += Mustache.render(templateSlide, data[i]);
}
carousel.innerHTML = renderedTemplates;

// flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  hash: true,
  pageDots: false
});

// button reset
var btnRestart = document.querySelector('.btn-restart');
btnRestart.addEventListener('click', function () {
  flkty.select(0);
});

// scroll
var progressBar = document.querySelector('.progress-bar');

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});