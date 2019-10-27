import anime from "../../node_modules/animejs/lib/anime.js"


export let cardPop = (canvas)=>{
    let clicked = false;
    return()=>{
    clicked=!clicked
    if(clicked){
        anime({
            targets: canvas,
            translateX: 250,
            scale: 2,
            rotate: '1turn'
        });
    }else{
        anime({
            targets: canvas,
            translateX: 0,
            scale: 1,
            rotate: '-1turn'
        });
    }
}
}
export let summonSlide=(canvas,startingPos)=>{
    anime({
        targets: canvas,
        keyframes: [
            {translateX: [startingPos,startingPos]},
            {translateY: 40},
            {translateX: 0},
            {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      }); 
}

