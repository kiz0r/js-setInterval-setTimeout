'use strict';

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

// printNumbers1(5, 20, 2000);

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

/* Task 2 */
// 2. *Виводити посилання через певний час після завантаження сторінки. Поки повідомлення не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".

function createLink(url, content) {
  const linkTag = document.createElement('a');
  linkTag.href = url;
  linkTag.textContent = content;
  return linkTag;
}

function pushLink() {
  const msgBox = document.querySelector('.msgBox');
  const linkContent = 'Cutie Cat ♥';
  const link =
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';

  const timeCount = 15;
  let intervalId = setInterval(() => {
    msgBox.innerHTML = `Wait for ${timeCount} sec`;
    if (timeCount === 0) {
      msgBox.innerHTML = '';
      msgBox.append(createLink(link, linkContent));
      clearInterval(intervalId);
    }
    timeCount--;
  }, 1000);
}

pushLink();
