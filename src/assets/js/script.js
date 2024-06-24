
//  Menu toggle
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const menu = document.getElementById("menu")
bar.addEventListener("click", function () {
  close.style.display = "block"
  menu.classList.add("active")
})
close.addEventListener("click", function () {
  close.style.display = "none";
  menu.classList.remove("active")
})

// click btn open page 
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  const post = document.querySelector("#post");
  const sectionTop = post.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth"
  });
});


// Scrool Top 
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


