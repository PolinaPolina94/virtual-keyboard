console.log('Hello')

//Без пробела массив
// const keyBoard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
//                   'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 
//                   'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 
//                   'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 
//                   'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', 'Alt', 
//                   'Control', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];

//С пробелом массив                  
const keyBoard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
                  'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 
                  'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 
                  'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 
                  'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 
                  'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];                  

// Массив charCode onkeydown
// const keyBoard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
//                   48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 
//                   85, 73, 79, 80, 219, 221, 220, 20, 20, 65, 83, 
//                   68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 
//                   90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91, 18, 32, 18, 17, 37, 38, 40, 39];

// document.onkeydown = function (event) {
//   // console.log(event)
//   keyBoard.push(event.keyCode)
//   console.log(keyBoard)
// }

// Создаем блок описания
let headerBlock = document.createElement('div');
headerBlock.className = "header";
headerBlock.innerHTML = "Virtual Keyboard";
document.body.append(headerBlock);

// Создаем текстовое поле
let textArea = document.createElement("TEXTAREA");
textArea.className = "teaxarea"; 
document.body.append(textArea);
textArea.focus();

// Создаем клавиатуру
let keyboardBlock = document.createElement('div');
keyboardBlock.className = "keyboard";
document.body.append(keyboardBlock);


// Массив с charCode onkeypress
const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 
                  112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 
                  107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 
                  109, 44, 46, 47];


//   document.onkeypress = function (event) {
//     // console.log(event)
//     keyboard.push(event.charCode);
//     console.log(keyboard)
//   }

// Создаем клавишу
let key = document.createElement('div');
key.className = "key";
keyboardBlock.append(key);


// function init () {
//   let out = '';
//   for (let i=0; i < keyboard.length; i++) {

//     if (i === 13) {
//       out += '<div class="clear"></div>'
//     }
//     if (i === 24) {
//       out += '<div class="clear"></div>'
//     }

//     out += '<div class="key">' +String.fromCharCode(keyboard[i])+ '</div>'
//   }
//   keyboardBlock.innerHTML = out; 
// }

// init();


// Создаем клавиатуру с добавлением клавиш
function init () {
  let out = '';
  for (let i=0; i < keyBoard.length; i++) {
    if (i === 14) {
      out += '<div class="clear"></div>'
    }
    if (i === 28) {
      out += '<div class="clear"></div>'
    }
    if (i === 41) {
      out += '<div class="clear"></div>'
    }
    if (i === 54) {
      out += '<div class="clear"></div>'
    }
    // if (i === 53) {
    //   out += '<div class="clear"></div>'
    // }
    // if (i === 56) {
    //   out += '<div class="key space"></div>'
    // }
    // if (i === 56) {
    //   out += '<div class="key space"></div>'
    // }

    out += '<div class="key" data="'+keyBoard[i]+'">' +keyBoard[i]+ '</div>'
    
    // console.log(keyBoard.indexOf(' '))

  }
  keyboardBlock.innerHTML = out; 
}
init();

document.querySelector('.body .keyboard .key[data="Backspace"]').classList.add('backspace');
document.querySelector('.body .keyboard .key[data="Tab"]').classList.add('tab');
// document.querySelector('.body .keyboard .key[data="\"]').classList.add('flash');
document.querySelector('.body .keyboard .key[data="CapsLock"]').classList.add('capslock');
document.querySelector('.body .keyboard .key[data="Enter"]').classList.add('enter');
document.querySelector('.body .keyboard .key[data="Shift"]').classList.add('backspace');
document.querySelectorAll('.body .keyboard .key[data="Shift"]')[0].classList.add('shift');
document.querySelectorAll('.body .keyboard .key[data="Shift"]')[1].classList.add('shift');
document.querySelector('.body .keyboard .key[data=" "]').classList.add('space');
document.querySelector('.body .keyboard .key[data="ArrowUp"]').classList.add('arrow-up');
document.querySelector('.body .keyboard .key[data="ArrowRight"]').classList.add('arrow-right');
document.querySelector('.body .keyboard .key[data="ArrowLeft"]').classList.add('arrow-left');
document.querySelector('.body .keyboard .key[data="ArrowDown"]').classList.add('arrow-down');


document.querySelector('.body .keyboard .key[data="ArrowUp"]').innerHTML = ' ';
document.querySelector('.body .keyboard .key[data="ArrowRight"]').innerHTML = ' ';
document.querySelector('.body .keyboard .key[data="ArrowLeft"]').innerHTML = ' ';
document.querySelector('.body .keyboard .key[data="ArrowDown"]').innerHTML = ' ';

// keyboard.map((key) => (
//     const keyElement = document.createElement('div');
//     keyElement.className = 'key';
//     keyElement.innerHTML = keyboard[key]; // or textContent
//     return keyElement;
// )


    // keyboard.map(function(name) {
    //     return name.length;



// Добавляем заливку при нажатии на клавишу
    document.onkeydown = function (event) {
      // console.log(event)
      // document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
      //   el.classList.remove('active')
      // })
      document.querySelector('.body .keyboard .key[data="'+event.key+'"]').classList.add('active');
      
    }


// Добавляем заливку при клике
    document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
      el.onclick = function () {
        document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
          el.classList.remove('active')
      });
      // let code = this.getAttribute('data');
      // this.classList.add('active');
      // console.log(code)
    }
  });


  // Убираем заливку при отпускании клавиши
  document.onkeyup = function (event) {
    // console.log(event.key)
    document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
      el.classList.remove('active')
    })
  }

document.onclick = function (event) {
  // console.log(event)
  // console.log(event.target.firstChild.data)


  // textArea.value = ' ';
// console.log(textArea)

document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
  el.onclick = function (event) {
     
    textArea.value += event.target.firstChild.data;
}})}