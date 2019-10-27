import { loadImage } from "./loaders.js";
import wrapText from "./wrapText.js";

export default function createCard(context,pie){
    loadImage('./PieMonsters/Images/template.gif')
    .then(image=>{
    context.drawImage(image,0,0,60,90);
    context.font = '5px Times New Roman';
    context.fillText(pie.name,5,6.4,90)
    wrapText(context,pie.flavorText,6,66,50,7)
    })
    loadImage('./PieMonsters/Images/TestCards.png')
    .then(image=>{
        context.drawImage(image,...pie.location,5,11,50,44)
    })
}