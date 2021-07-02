'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const arr = text.split('\n');
  let i = 1;
  const emoji = '✅';
  for (const word of arr) {
    const wordA = word.trim().toLowerCase();
    const wordB =
      wordA.slice(0, [wordA.indexOf('_')]) +
      wordA
        .slice(wordA.indexOf('_') + 1, wordA.indexOf('_') + 2)
        .toUpperCase() +
      wordA.slice(wordA.indexOf('_') + 2);
    console.log(wordB.padEnd(20, ' ') + emoji.repeat(i));
    i++;
  }
});
