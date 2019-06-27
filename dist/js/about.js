// OPENING ANIMATION //
TweenMax.to('.opening', 1, {autoAlpha: 0});

let query = document.querySelector.bind(document);

let info = '.card__home--info';
let work = '.card__home--work';
let skill = '.card__home--skill'

TweenMax.to('.flip-card-inner', 1.3, {rotationY: '180deg', delay: 1});

/**********************************************************************************/
// HOVER ANIMATION //
/**********************************************************************************/

let hoverCard = (card, span, svg, svg1, svg2, color) => {

   function mouseoverCard() {
      TweenMax.to(span, .5, {x: '500rem', opacity: 0})
      TweenMax.to(svg, .5, {x: '460%'});
      TweenMax.to(svg1, .5, {fill: '#ffe8d5'});
      TweenMax.to(svg2, .5, {fill: color});
   }

   function mouseoutCard() {
      TweenMax.to(span, .8, {x: '0%', opacity: 1});
      TweenMax.to(svg, .8, {x: '0%'});
      TweenMax.to(svg1, .5, {fill: '#545554'});
      TweenMax.to(svg2, .5, {fill: '#ffe8d5'});
   }

/**********************************************************************************/
// CLICK INFO ANIMATION //
/**********************************************************************************/

   // INFO ANIMATION //

   function infoAnima() {
      query(card).removeEventListener('mouseout', mouseoutCard);
   
      TweenMax.to(info, 1, {height: '100%'});
      TweenMax.to('.svginfo', .5, {scale: .8, y: '-230%', delay: 1});
   
      TweenMax.to(work, 1, {height: '0%'});
      TweenMax.to('.span-work', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svgwork', .4, {display: 'none', opacity: 0});
   
      TweenMax.to(skill, 1, {height: '0%'});
      TweenMax.to('.span-skill', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svgskill', .4, {display: 'none', opacity: 0});

      TweenMax.to('.infoCard', 1, {display: 'block', opacity: 1, delay: 1.5});
   }

   function infoAnimaOut() {
      query(card).addEventListener('mouseout', mouseoutCard);

      TweenMax.to('.infoCard', .5, {display: 'none', opacity: 0});
      TweenMax.to('.svginfo', 1, {scale: 1, y: '0%', delay: 0});

      TweenMax.to(span, .8, {x: '0', opacity: 1, delay: 1})
      TweenMax.to(svg, .8, {x: '0%', delay: 1});
      TweenMax.to(svg1, .5, {fill: '#545554', delay: 1});
      TweenMax.to(svg2, .5, {fill: '#ffe8d5', delay: 1});

      TweenMax.to(info, 1, {height: '33.33333333%', delay: 1.8});

      TweenMax.to(work, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-work', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svgwork', .4, {display: 'block', opacity: 1, delay: 1.8});
   
      TweenMax.to(skill, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-skill', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svgskill', .4, {display: 'block', opacity: 1, delay: 1.8});
   }

   // WORK ANIMATION //

   function workAnima() {
      query(card).removeEventListener('mouseout', mouseoutCard);
   
      TweenMax.to(work, 1, {height: '100%'});
      TweenMax.to('.svgwork', .5, {scale: .8, y: '-230%', delay: 1});
   
      TweenMax.to(info, 1, {height: '0%'});
      TweenMax.to('.span-info', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svginfo', .4, {display: 'none', opacity: 0});
   
      TweenMax.to(skill, 1, {height: '0%'});
      TweenMax.to('.span-skill', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svgskill', .4, {display: 'none', opacity: 0});

      TweenMax.to('.workCard', 1, {display: 'block', opacity: 1, delay: 1.5});
   }

   function infoWorkOut() {
      query(card).addEventListener('mouseout', mouseoutCard);

      TweenMax.to('.workCard', .5, {display: 'none', opacity: 0});
      TweenMax.to('.svgwork', 1, {scale: 1, y: '0%', delay: 0});

      TweenMax.to(span, .8, {x: '0', opacity: 1, delay: 1})
      TweenMax.to(svg, .8, {x: '0%', delay: 1});
      TweenMax.to(svg1, .5, {fill: '#545554', delay: 1});
      TweenMax.to(svg2, .5, {fill: '#ffe8d5', delay: 1});

      TweenMax.to(work, 1, {height: '33.33333333%', delay: 1.8});

      TweenMax.to(skill, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-skill', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svgskill', .4, {display: 'block', opacity: 1, delay: 1.8});
   
      TweenMax.to(info, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-info', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svginfo', .4, {display: 'block', opacity: 1, delay: 1.8});
   }

   // SKILL ANIMATION //

   function skillAnima() {
      query(card).removeEventListener('mouseout', mouseoutCard);
   
      TweenMax.to(skill, 1, {height: '100%'});
      TweenMax.to('.svgskill', .5, {scale: .8, y: '-230%', delay: 1});
   
      TweenMax.to(info, 1, {height: '0%'});
      TweenMax.to('.span-info', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svginfo', .4, {display: 'none', opacity: 0});
   
      TweenMax.to(work, 1, {height: '0%'});
      TweenMax.to('.span-work', .4, {display: 'none', opacity: 0});
      TweenMax.to('.svgwork', .4, {display: 'none', opacity: 0});

      TweenMax.to('.skillCard', 1, {display: 'block', opacity: 1, delay: 1.5});
   }

   function infoSkillOut() {
      query(card).addEventListener('mouseout', mouseoutCard);

      TweenMax.to('.skillCard', .5, {display: 'none', opacity: 0});
      TweenMax.to('.svgskill', 1, {scale: 1, y: '0%', delay: 0});

      TweenMax.to(span, .8, {x: '0', opacity: 1, delay: 1})
      TweenMax.to(svg, .8, {x: '0%', delay: 1});
      TweenMax.to(svg1, .5, {fill: '#545554', delay: 1});
      TweenMax.to(svg2, .5, {fill: '#ffe8d5', delay: 1});

      TweenMax.to(skill, 1, {height: '33.33333333%', delay: 1.8});

      TweenMax.to(work, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-work', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svgwork', .4, {display: 'block', opacity: 1, delay: 1.8});
   
      TweenMax.to(info, 1, {height: '33.33333333%', delay: 1.8});
      TweenMax.to('.span-info', .4, {display: 'block', opacity: 1, delay: 1.8});
      TweenMax.to('.svginfo', .4, {display: 'block', opacity: 1, delay: 1.8});
   }
///////////////////////////////////////////////////////////////////////////////////////////////

   query(card).addEventListener('mouseover', mouseoverCard);
   query(card).addEventListener('mouseout', mouseoutCard);
   
   query(info).addEventListener('click', infoAnima);
   query('.infoCard').addEventListener('click', infoAnimaOut);
   query(skill).addEventListener('click', skillAnima);
   query('.skillCard').addEventListener('click', infoSkillOut);
   query(work).addEventListener('click', workAnima);
   query('.workCard').addEventListener('click', infoWorkOut);
};

let cardInfo = hoverCard(info, '.span-info', '.svginfo', '.svginfo-1', '.svginfo-2', '#ff4d4d');
let cardWork = hoverCard(work, '.span-work', '.svgwork', '.svgwork-1', '.svgwork-2', '#ff8364');
let cardSkill = hoverCard(skill, '.span-skill', '.svgskill', '.svgskill-1', '.svgskill-2', '#fdb87d');




