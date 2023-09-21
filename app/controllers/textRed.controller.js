import tweets from "./../tweets.json";
import { renderTweets } from "./searchFilter.controller";


// ------------poner en rojo el textoo--------------

export const textRed = () => {
  //seleccionar un id de html
  const textarea = document.getElementById('mensaje')

  //funciona con un evento que va a dispararlo
  textarea.addEventListener('input', function (){
      const maxChar = 10;
      if (textarea.value.length > maxChar){
          textarea.style.color = '#EB5757';
      }
      else {
          textarea.style.color = 'white';
      }
  });
};


// ------------ characteres left --------------

export const renderChart = () => {
    // Seleccionar las clases en el index que queremos que varien
    const comment = document.querySelector('.commentArea')
    const counter = document.querySelector('.charCounter')
    const btn = document.querySelector('.button')
  
    // Largura máxima 
    const totalLength = 10
  
    // Pintamos la función que varian las clases
    const validateComment = () => {
      let len = parseInt(totalLength - comment.value.length)
      counter.innerHTML = `${len}`
  
      if (len < 0 || comment.value.length < 2) {
          counter.style.cssText = 'color: #e50000';
          btn.style.cssText = 'pointer-events: none';
      } else {
          counter.style.cssText = 'color: #00bb00';
          btn.style.cssText = 'visibility: visible';
      } 
    };
    
    // listener en el área de comentarios que se activa cada vez que se presiona una tecla
    comment.addEventListener('keydown', (e) => {
      validateComment()
    });
};