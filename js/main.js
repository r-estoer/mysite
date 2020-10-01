'use strict';

{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    document.querySelectorAll('h3').forEach((h3) => {
      h3.textContent = "ハイスコアです！";
    });
  }

  setTimeout(update, 2000);
}