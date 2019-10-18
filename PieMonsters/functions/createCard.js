import { loadImage } from "./loaders.js";
import wrapText from "./wrapText.js";

export default function createCard(context,pie){
    loadImage('./PieMonsters/Images/template.gif')
    .then(image=>{
    context.drawImage(image,0,0,100,130);
    context.font = '11px serif';
    context.fillText(pie.name,10,11)
    wrapText(context,pie.flavorText,13,95,80,10)
    })
    loadImage('./PieMonsters/Images/TestCards.png')
    .then(image=>{
        context.drawImage(image,...pie.location,9,15,81,66)
    })
}