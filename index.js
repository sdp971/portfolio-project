//Hamburger menu
const menuHamburger = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

menuHamburger.addEventListener('click', function () {
  navList.classList.toggle('mobile-menu');
});

//Typing effect

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//Type Method
TypeWriter.prototype.type = function () {
  //Current index of word
  const current = this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];
  //Check if deleting
  if (this.isDeleting) {
    //Remove a character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add a character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //Initial Type Speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  //If word is complete

  if (!this.isDeleting && this.txt === fullTxt) {
    //Make pause at end
    typeSpeed = this.wait;
    //Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //Move to the next word
    this.wordIndex++;
    //Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), 200);
};

//Init On Dom Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  //Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

//Download file

const downloadBtn = document.querySelector('.download-btn');
const url = './todownload/Séverine_DORIMOND PEREIRA_CV.pdf';

downloadBtn.addEventListener('click', function () {
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  downloadBtn.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
