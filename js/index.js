/*******************************************/
//  INDEX ANIMATION  //
/*******************************************/

let query = document.querySelector.bind(document);

let btn = [".btn-about", ".btn-art", ".btn-camera", ".btn-web", ".btn-tech"];

let popStyle = [
  ".anima-main__about",
  ".anima-main__art",
  ".anima-main__camera",
  ".anima-main__web",
  ".anima-main__tech"
];

let iconHover = (btn, popStyle) => {

  function mouseoverPop() {
    TweenMax.to(popStyle, .3, {height: '100%', ease:Power3.easeIn});
  };

  function mouseoutPop() {
    TweenMax.to(popStyle, .3, {height: '2rem'});
  };

  query(btn).addEventListener('mouseover', mouseoverPop);
  query(btn).addEventListener('mouseout', mouseoutPop);

  query(btn).addEventListener('click', () => { // removes above function when a button is clicked
    TweenMax.to('.text', .1, {opacity: 0});
    TweenMax.to('.title', .1, {opacity: 0});
    query(btn).removeEventListener('mouseout', mouseoutPop);
  });
};

btn.forEach((item, index) => {
  iconHover(item, popStyle[index]);
});

/*******************************************/
//  CLICK ANIMATION  //
/*******************************************/

// FUNCTIONS //
function iconOpacity(btn1, btn2, btn3, btn4) {
  TweenMax.to(btn1, 0, {opacity: 0});
  TweenMax.to(btn2, 0, {opacity: 0});
  TweenMax.to(btn3, 0, {opacity: 0});
  TweenMax.to(btn4, 0, {opacity: 0});
};

function popDisappear(anima1, anima2, anima3, anima4) {
  TweenMax.to(anima1, .5, {width: '0vw'});
  TweenMax.to(anima2, .5, {width: '0vw'});
  TweenMax.to(anima3, .5, {width: '0vw'});
  TweenMax.to(anima4, .5, {width: '0vw'});
};

// ABOUT //
query('.btn-about').addEventListener('click', () => {
  TweenMax.to('.anima-main__about', .4, {width: '100vw'});
  TweenMax.to('.btn-about', .2, {x: '200%'});
  TweenMax.to('.btn-about', .1, {opacity: 0, delay: 1});

  iconOpacity('.btn-art', '.btn-camera', '.btn-web', '.btn-tech');
  popDisappear('.anima-main__art', '.anima-main__camera', '.anima-main__web', '.anima-main__tech');
});

// ART //
query('.btn-art').addEventListener('click', () => {
  TweenMax.to('.anima-main__art', .4, {width: '100vw'});
  TweenMax.to('.btn-art', .2, {x: '100%'});
  TweenMax.to('.btn-art', .1, {opacity: 0, delay: 1});

  iconOpacity('.btn-about', '.btn-camera', '.btn-web', '.btn-tech');
  popDisappear('.anima-main__about', '.anima-main__camera', '.anima-main__web', '.anima-main__tech');
});

// CAMERA //
query('.btn-camera').addEventListener('click', () => {
  TweenMax.to('.anima-main__camera', .4, {width: '100vw'});
  TweenMax.to('.btn-camera', .1, {opacity: 0, delay: 1});

  iconOpacity('.btn-about', '.btn-art', '.btn-web', '.btn-tech');
  popDisappear('.anima-main__about', '.anima-main__art', '.anima-main__web', '.anima-main__tech');
});

// WEB //
query('.btn-web').addEventListener('click', () => {
  TweenMax.to('.anima-main__web', .4, {width: '100vw'});
  TweenMax.to('.btn-web', .2, {x: '-100%'});
  TweenMax.to('.btn-web', .1, {opacity: 0, delay: 1});

  iconOpacity('.btn-about', '.btn-art', '.btn-camera', '.btn-tech');
  popDisappear('.anima-main__about', '.anima-main__art', '.anima-main__camera', '.anima-main__tech');
});

// TECH //
query('.btn-tech').addEventListener('click', () => {
  TweenMax.to('.anima-main__tech', .4, {width: '100vw'});
  TweenMax.to('.btn-tech', .2, {x: '-200%'});
  TweenMax.to('.btn-tech', .1, {opacity: 0, delay: 1});

  iconOpacity('.btn-about', '.btn-art', '.btn-camera', '.btn-web');
  popDisappear('.anima-main__about', '.anima-main__art', '.anima-main__camera', '.anima-main__web');
});

// COUNTDOWN CLICK HREF //
let indexLocation = ['about.html', 'art.html', 'camera.html', 'web.html', 'tech.html'];

let loopLocation = (btn, indexLocation) => {
  query(btn).addEventListener('click', () => {
    setTimeout(function () {
      window.location.href = indexLocation;
    }, 2000);
  });
};

btn.forEach((item, index) => {
  loopLocation(item, indexLocation[index]);
});

