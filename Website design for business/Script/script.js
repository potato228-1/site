// Navigation menu

let nav = document.querySelector('.nav');
nav.addEventListener('click', function() {
	for(let i of nav.children){
		i.classList.remove('nav-active')
	};
	event.target.closest('.nav-button').classList.add('nav-active');
});

// Contacr Us selector

let selectorCurrent = document.querySelector('.selector-current');
let dropDownMenu = document.querySelector('.selector-dropDownMenu');

selectorCurrent.addEventListener('click', function(){
	dropDownMenu.classList.toggle('not-active');
	document.querySelector('.current-icon').classList.toggle('icon-rotated');
});

dropDownMenu.addEventListener('click', function(){
	document.querySelector('.current-item').classList.remove('current-unchoosed');
	document.querySelector('.current-item').innerText = event.target.closest('.dropDownMenu-item').innerText;
	dropDownMenu.classList.toggle('not-active');
})

let selectorCurrent2 = document.querySelector('.selector-city');
let dropDownMenu2 = document.querySelector('.selector-dropDownMenu-city');

selectorCurrent2.addEventListener('click', function(){
	dropDownMenu2.classList.toggle('not-active');
	document.querySelector('.сurrent-icon-city').classList.toggle('icon-rotated');
});

dropDownMenu2.addEventListener('click', function(){
	document.querySelector('.current-item-city').classList.remove('current-unchoosed');
	document.querySelector('.current-item-city').innerText = event.target.closest('.dropDownMenu-item-city').innerText;
	dropDownMenu2.classList.toggle('not-active');
})

// Contact Us message

let textarea = document.querySelector('#message-input');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});

// Our Gallery

let swipeRight = document.querySelector('#right-arrow');
let swipeLeft = document.querySelector('#left-arrow');
let barLine = document.querySelector('.bar-line');
let offset = 0;
let barChilds = barLine.children;
let n = 0;
let sliderFirstCurrent = barChilds[n];

swipeRight.addEventListener('click', function(){
	offset -= sliderFirstCurrent.width;
	barLine.style.left = offset + 'px';
	sliderFirstCurrent = barChilds[n+=1];
});