import anime from "../../PieMonsters/anime-master/src/index.js";


export let cardPop = (canvas)=>{
    let clicked = false;
    return()=>{
    clicked=!clicked
    console.log(canvas)
    console.log('clicked')
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