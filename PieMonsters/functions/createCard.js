import { loadImage } from "./loaders.js";
import wrapText from "./wrapText.js";

export default function createCard(context,pie){
    loadImage('./PieMonsters/Images/template.gif')
    .then(image=>{
    context.drawImage(image,0,0,60,90);
    context.font = '5px serif';
    context.fillText(pie.name,7,7,90)
    wrapText(context,pie.flavorText,6,67,50,10)
    })
    loadImage('./PieMonsters/Images/TestCards.png')
    .then(image=>{
        context.drawImage(image,...pie.location,5,11,50,44)
    })
}