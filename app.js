import { nombre } from "./js/ex1.js";
import {sum, printTerminal } from "./js/ex2.js";
import { stringLowerCase, word2, word } from "./js/ex3.js";
import { reverseWords, words } from "./js/hello.js"

 let numb1= 3
let numb2= 5
function app (){
    printTerminal(nombre)
    printTerminal(sum(numb1, numb2))
    console.log(word2());
    console.log(reverseWords());


 
    
}
app()


