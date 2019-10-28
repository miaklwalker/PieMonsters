import anime from "../../node_modules/animejs/lib/anime.js"

let sellPie=(pie,canvas)=>{
    let button = document.createElement('button');
    button.innerText = 'Sell Pie'
    button.addEventListener('click',()=>{
        console.log(pie.cost)
        canvas.parentNode.innerHTML=''
    });
    return button
}

export let cardPop = (canvas,pie)=>{
    let clicked = false;
    let button = sellPie(pie,canvas)
    return()=>{
    clicked=!clicked
    if(clicked){
        canvas.parentNode.appendChild(button)
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
        canvas.parentNode.removeChild(button)
    }
}
}
export let summonSlide=(canvas,startingPos)=>{
    anime({
        targets: canvas,
        keyframes: [
            {translateX: [startingPos,startingPos]},
            {scale:2},
            {translateY: 40},
            {translateX: 0},
            {translateY: 0},
            {scale:1},
        ],
        
        duration: 3000,
        easing: 'easeOutElastic(1,.8)',
        loop: false
      }); 
}

