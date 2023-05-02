console.log('Hello')

// Массив En onkeyDown keys                  
const keyBoardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 
                  'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 
                  'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 
                  'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 
                  'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 
                  'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];             
                  

// Массив RU onkeydown keys                              
const keyBoardRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
                  '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 
                  'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
                  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 
                  'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 
                  'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 'Control', 
                  'Meta', 'Alt', ' ',  'Alt', 'Control',
                  'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// Массив с charCode onkeypress
// const keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 
//                   112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 
//                   107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 
//                   109, 44, 46, 47];

// Массив charCode onkeydown
// const keyBoard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
//                   48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 
//                   85, 73, 79, 80, 219, 221, 220, 20, 20, 65, 83, 
//                   68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 
//                   90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91, 18, 32, 18, 17, 37, 38, 40, 39];

// Создаем блок описания
let headerBlock = document.createElement('div');
headerBlock.className = "header";
headerBlock.innerHTML = "Virtual Keyboard :)";
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

let description = document.createElement('div');
description.className = "description";
description.innerHTML = "Клавиатура создана в операционной системе Windows." + '<br>' +
                         "Для переключения языка комбинация: левыe ctrl + alt"
document.body.append(description);

// Создаем клавишу
let key = document.createElement('div');
key.className = "key";
keyboardBlock.append(key);

// Создаем клавиатуру с добавлением клавиш
function init (keyboard) {
  let out = '';
  for (let i=0; i < keyboard.length; i++) {
    if (i === 14) {
      out += '<div class="clear"></div>'
    }
    if (i === 29) {
      out += '<div class="clear"></div>'
    }
    if (i === 42) {
      out += '<div class="clear"></div>'
    }
    if (i === 55) {
      out += '<div class="clear"></div>'
    }
    out += '<div class="key" data="'+keyboard[i]+'">' +keyboard[i]+ '</div>'
  }
  keyboardBlock.innerHTML = out; 

// // Задаем стили для клавиш 
document.querySelector('.body .keyboard .key[data="Backspace"]').classList.add('backspace');
document.querySelector('.body .keyboard .key[data="Tab"]').classList.add('tab');
document.querySelector('.body .keyboard .key[data="CapsLock"]').classList.add('capslock');
document.querySelector('.body .keyboard .key[data="Enter"]').classList.add('enter');
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
document.querySelector('.body .keyboard .key[data="Delete"]').innerHTML = 'Del';
}
init(keyBoardEn);



let shiftPressed = false;
let altPressed = false;

// Добавляем заливку при нажатии на клавишу (ниже ****)
document.onkeydown = function (event) {
  textArea.focus();

// Добавляем смену языка с En на RU
  if (event.code === "ShiftLeft") {
    event.preventDefault();
    shiftPressed = !shiftPressed;
    console.log(shiftPressed) 
  }
  if (event.code === "AltLeft") {
    event.preventDefault();
    altPressed = !altPressed;
    console.log(altPressed) 
  }

  if (shiftPressed && altPressed) {
    init(keyBoardRu)
  }
  if (!shiftPressed && !altPressed) {
    init(keyBoardEn)
  }

// *****  
  document.querySelector('.body .keyboard .key[data="'+event.key+'"]').classList.add('active');

// Добавляем стрелки в поле ввода и отменяем дефолтное поведение стрелок при нажатии
      if (event.key === "ArrowUp") {
        event.preventDefault();
        textArea.value += "↑"
      }
      if (event.key === "ArrowDown") {
        textArea.value += "↓"
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        textArea.value += "←"
      }
      if (event.key === "ArrowRight") {
        textArea.value += "→"
      }
      if(event.key === "Tab") {
        event.preventDefault();
      }
      if (event.key === "Tab") {
        textArea.value += " "
      }
      if (event.code === "ControlRight") {
        document.querySelectorAll('.body .keyboard .key[data="Control"]')[1].classList.add('active');
        document.querySelectorAll('.body .keyboard .key[data="Control"]')[0].classList.remove('active');
      }
      if(event.key === "Alt") {
        event.preventDefault();
      }
      if (event.code === "AltRight") {
        document.querySelectorAll('.body .keyboard .key[data="Alt"]')[1].classList.add('active');
        document.querySelectorAll('.body .keyboard .key[data="Alt"]')[0].classList.remove('active');
      }
      if (event.code === "ShiftRight") {
        document.querySelectorAll('.body .keyboard .key[data="Shift"]')[1].classList.add('active');
        document.querySelectorAll('.body .keyboard .key[data="Shift"]')[0].classList.remove('active');
      }
    

// Добавляем заливку при клике
    document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
      el.onclick = function () {
        document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
          el.classList.remove('active')
      });
    }
  });

  // Убираем заливку при отпускании клавиши
  document.onkeyup = function () {
    document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
      el.classList.remove('active')
    })
  }
  clickKeyboard();  
}

const clickKeyboard = function () {

  document.querySelectorAll('.body .keyboard .key').forEach(function(el) {

    el.onclick = function (event) {
  
      if (event.target.firstChild.data === "Enter") {
        textArea.value += "\n";
        textArea.value = textArea.value(replace("Enter",""));  // Вернуться
      }
      if (event.target.firstChild.data === "Shift" 
        || event.target.firstChild.data === "Control" 
        || event.target.firstChild.data === "Alt") {
        textArea.value += textArea.value(replace("Shift",""));  // Вернуться
      }
      if (event.target.firstChild.data === "Backspace") {
        textArea.value = textArea.value.slice(0, -1);
        textArea.value = textArea.value(replace("Backspace",""));  // Вернуться
      }
      if (event.target.firstChild.data === "Tab") {
        textArea.value += " ";
        textArea.value = textArea.value(replace("Tab",""));  // Вернуться
      }
      if (event.target.firstChild.data === "Del") {
        textArea.value = textArea.value.slice(0, -1);
        textArea.value = textArea.value(replace("Delete","")) // Вернуться
      }
      if (event.target.firstChild.data === "CapsLock") {
        textArea.value = textArea.value(replace("CapsLock",""));  // Вернуться
      }
      // Добавляем стрелки в поле ввода при прике на них 
      if (event.target.className === "key arrow-up") {
        textArea.value += "↑"
      }
      if (event.target.className === "key arrow-down") {
        textArea.value += "↓"
      }
      if (event.target.className === "key arrow-left") {
        textArea.value += "←"
      }
      if (event.target.className === "key arrow-right") {
        textArea.value += "→"
      }
      textArea.value += event.target.firstChild.data;
  }})
}
clickKeyboard();  