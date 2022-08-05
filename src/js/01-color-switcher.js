function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const bodyEl = document.querySelector("body")
  const startBtn = document.querySelector('[data-start]')
  const stopBtn = document.querySelector('[data-stop]')

// const timer = {
//     intervalId: null,
//     isActive: false,
// }
let timer = null;
let isActive = false


// создаем функцию которая меняет цвет body
// на body получаем доступ к background-color и вешаем функцию генерации цвета

function changeHexColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }


  startBtn.addEventListener("click", () => {
    if(isActive) {
        return
    } 
    isActive = true;
    timer = setInterval(() => {
        changeHexColor();
        console.log('цвет меняется через 1 секунду');
    }, 1000);

  
  });

  stopBtn.addEventListener("click", () => {
    isActive = false;
    clearInterval(timer);
    console.log("цвет боди не меняется");
   
  });
