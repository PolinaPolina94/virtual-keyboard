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
                  'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 
                  'Control', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];                  

// Массив charCode onkeydown
// const keyBoard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 
//                   48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 
//                   85, 73, 79, 80, 219, 221, 220, 20, 20, 65, 83, 
//                   68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 
//                   90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 17, 91, 18, 32, 18, 17, 37, 38, 40, 39];

document.onkeydown = function (event) {
  // console.log(event)
  keyBoard.push(event.keyCode)
  console.log(keyBoard)
}


let headerBlock = document.createElement('div');
headerBlock.className = "header";
headerBlock.innerHTML = "Virtual Keyboard";
document.body.append(headerBlock);


let keyboardBlock = document.createElement('div');
keyboardBlock.className = "keyboard";
//   keyboard.innerHTML = "Virtual Keyboard";
document.body.append(keyboardBlock);


//   let key = document.createElement('div');
//   key.className = "key";
//   keyboard.append(key);

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
    if (i === 53) {
      out += '<div class="clear"></div>'
    }
    if (i === 53) {
      out += '<div class="clear"></div>'
    }
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


// document.onkeydown = function (event) {
//   console.log(event.code)
// }


// keyboard.map((key) => (
//     const keyElement = document.createElement('div');
//     keyElement.className = 'key';
//     keyElement.innerHTML = keyboard[key]; // or textContent
//     return keyElement;
// )


    // keyboard.map(function(name) {
    //     return name.length;


    document.onkeydown = function (event) {
      console.log(event.key)
      document.querySelectorAll('.body .keyboard .key').forEach(function(el) {
        el.classList.remove('active')
      })
      document.querySelector('.body .keyboard .key[data="'+event.key+'"]').classList.add('active')
    }