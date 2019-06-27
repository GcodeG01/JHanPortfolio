// OPENING ANIMATION //
TweenMax.to('.opening', 1, {autoAlpha: 0});

let smallImg = [
   '.thumbnail__item--1',
   '.thumbnail__item--2',
   '.thumbnail__item--3',
   '.thumbnail__item--4',
   '.thumbnail__item--7',
   '.thumbnail__item--5',
   '.thumbnail__item--6',
   '.thumbnail__item--10',
   '.thumbnail__item--11',
   '.thumbnail__item--12',
   '.thumbnail__item--8',
   '.thumbnail__item--9',
   '.thumbnail__item--13',
   '.thumbnail__item--14',
   '.thumbnail__item--15',
   '.thumbnail__item--16',
   '.thumbnail__item--17',
   '.thumbnail__item--18',
   '.thumbnail__item--19',
   '.thumbnail__item--20',
   '.thumbnail__item--21',
   '.thumbnail__item--22',
   '.thumbnail__item--23',
   '.thumbnail__item--24',
   '.thumbnail__item--30',
   '.thumbnail__item--25',
   '.thumbnail__item--26',
   '.thumbnail__item--27',
   '.thumbnail__item--28',
   '.thumbnail__item--29'
];

let bigImg = [
   '.large--1',
   '.large--2',
   '.large--3',
   '.large--4',
   '.large--5',
   '.large--6',
   '.large--7',
   '.large--8',
   '.large--9',
   '.large--10',
   '.large--11',
   '.large--12',
   '.large--13',
   '.large--14',
   '.large--15',
   '.large--16',
   '.large--17',
   '.large--18',
   '.large--19',
   '.large--20',
   '.large--21',
   '.large--22',
   '.large--23',
   '.large--24',
   '.large--25',
   '.large--26',
   '.large--27',
   '.large--28',
   '.large--29',
   '.large--30'
]

let check;
let query = document.querySelector.bind(document);

let testObj = {};
let visible = 1; // So that next and previous doesn't work outside box

/***********************************************************************************************/
// ENLARGE IMG //
/***********************************************************************************************/

let gallery = (smallImg, bigImg, currentIndex) => {
   query(smallImg).addEventListener('click', () => {
      TweenMax.to('.gallery', 0.1, {visibility: 'visible', opacity: 1, delay: .2});
      TweenMax.to(bigImg, .4, {display: 'block', scale: 1, delay: .3});
      testObj.currentPosition = currentIndex;
      visible = 0;
   });

   query('.gallery__box').addEventListener('click', () => {
      TweenMax.to(bigImg, .1, {display: 'none', scale: .5, delay: .1});
      TweenMax.to('.gallery', .3, {visibility: 'hidden', opacity: 0, delay: .3});
      visible = 1;
   });
};

/***********************************************************************************************/
// ASSIGN LARGE IMG WITH SMALL IMG //
/***********************************************************************************************/

smallImg.forEach((item, index) => {
   gallery(item, bigImg[index], index);
});

/***********************************************************************************************/
// NEXT IMG //
/***********************************************************************************************/

query('.right-arrow').addEventListener('click', () => {
   TweenMax.to(bigImg, 0, {display: 'none'});

   if (testObj.currentPosition < 29) {
      TweenMax.to(bigImg[testObj.currentPosition = testObj.currentPosition + 1], 0, {display: 'block', scale:1});
   }
   else {
      TweenMax.to(bigImg[testObj.currentPosition = 0], 0, {display: 'block', scale:1});
   }
})

/***********************************************************************************************/
// PRESVIOUS IMG //
/***********************************************************************************************/

query('.left-arrow').addEventListener('click', () => {
   TweenMax.to(bigImg, 0, {display: 'none'});

   if (testObj.currentPosition > 0) {
      TweenMax.to(bigImg[testObj.currentPosition = testObj.currentPosition - 1], 0, {display: 'block', scale:1});
   }
   else {
      TweenMax.to(bigImg[testObj.currentPosition = 29], 0, {display: 'block', scale:1});
   }
})

/***********************************************************************************************/
// NEXT AND PREVIOUS KEYDOWN //
/***********************************************************************************************/

document.addEventListener('keydown', (event) => {
   if (event.keyCode == 39 && visible == 0) {
      TweenMax.to(bigImg, 0, {display: 'none'});

      if (testObj.currentPosition < 29) {
         TweenMax.to(bigImg[testObj.currentPosition = testObj.currentPosition + 1], 0, {display: 'block', scale:1});
      }
      else {
         TweenMax.to(bigImg[testObj.currentPosition = 0], 0, {display: 'block', scale:1});
      }
   }
   if(event.keyCode == 37 && visible == 0) {
      TweenMax.to(bigImg, 0, {display: 'none'});

      if (testObj.currentPosition > 0) {
         TweenMax.to(bigImg[testObj.currentPosition = testObj.currentPosition - 1], 0, {display: 'block', scale:1});
      }
      else {
         TweenMax.to(bigImg[testObj.currentPosition = 29], 0, {display: 'block', scale:1});
      }
  }
});