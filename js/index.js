/*******************************************/
//  OPENING ANIMATION  //
/*******************************************/

TweenMax.to('.animation__bow1', .8, {autoAlpha: 0, repeat: -1, yoyo: true, ease: Power4.easeInOut});
TweenMax.to('.animation__bow2', .8, {autoAlpha: 1, repeat: -1, yoyo: true, ease: Power4.easeInOut});
TweenMax.to('.animation__intro-text', 1.5, {autoAlpha: 1, repeat: 1, yoyo: true,});
TweenMax.to('.animation__guide', 1, {autoAlpha: 1, delay: 2.7});
TweenMax.to('.animation', 1, {autoAlpha: 0, delay: 6});

setTimeout(function(){window.location.href='home.html'},6000);