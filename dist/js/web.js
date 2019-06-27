// OPENING ANIMATION //
TweenMax.to('.opening', 1, {autoAlpha: 0});

let query = document.querySelector.bind(document);

let slotAnima = (slot, img, span) => {
   query(slot).addEventListener('mouseover', () => {
      TweenMax.to(img, .3, {filter: 'brightness(50%)'});
      TweenMax.to(span, .4, {y: '-200%', opacity: 1});
   })
   query(slot).addEventListener('mouseout', () => {
      TweenMax.to(img, .4, {filter: 'brightness(100%)'});
      TweenMax.to(span, .3, {y: '0%', opacity: 0});
   })
}

let omnifoodAnima = slotAnima('.project-1', '.img-omnifood', '.span-omnifood');
let natoursAnima = slotAnima('.project-2', '.img-natours', '.span-natours');
let design1Anima = slotAnima('.design-1', '.img-store-1', '.span-store-1');
let design2Anima = slotAnima('.design-2', '.img-store-2', '.span-store-2');