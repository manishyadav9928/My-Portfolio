document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
  document.querySelector('#navmenu').classList.toggle('open');
});



var typed = new Typed(".text",{
  strings:["Frontend Developer", "Java Developer", "Web Developer"],
  typeSpeed : 80,
  backSpeed : 100,
  backDelay : 1000,
  loop : true
});








document.querySelector('.download-cv').addEventListener('click', function() {
  alert('CV Downloaded!');
});






// -----------projects-------------








const inputs = document.querySelectorAll(".input");

function focusFunc() {
let parent = this.parentNode;
parent.classList.add("focus");
}

function blurFunc() {
let parent = this.parentNode;
if (this.value == "") {
  parent.classList.remove("focus");
}
}

inputs.forEach((input) => {
input.addEventListener("focus", focusFunc);
input.addEventListener("blur", blurFunc);
});
