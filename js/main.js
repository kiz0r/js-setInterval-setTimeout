'use strict';

// 2. *Виводити посилання через певний час після завантаження сторінки. Поки повідомлення не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".

/* Task 1 */

// printNumbers using setInterval
function printNumbers1(from, to, interval) {
  let current = from;

  let intervalId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(intervalId);
    }
    current++;
  }, interval);
}

printNumbers1(5, 20, 2000);

// printNumbers using setTimeout with recursion
function printNumbers2(from, to, interval) {
  let current = from;

  setTimeout(function recTimeout() {
    console.log(current);
    if (current < to) {
      setTimeout(recTimeout, interval);
    }
    current++;
  }, interval);
}

// printNumbers2(5, 20, 1000);
