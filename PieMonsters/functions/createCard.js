import { loadImage } from "./loaders.js";
import wrapText from "./wrapText.js";

export default function createCard(context,pie){
    loadImage('./PieMonsters/Images/template.gif')
    .then(image=>{
    context.drawImage(image,0,0,110,150);
    context.font = '11px serif';
    context.fillText(pie.name,11,12,90)
    wrapText(context,pie.flavorText,13,110,80,10)
    })
    loadImage('./PieMonsters/Images/TestCards.png')
    .then(image=>{
        context.drawImage(image,...pie.location,10,18,90,74)
    })
}