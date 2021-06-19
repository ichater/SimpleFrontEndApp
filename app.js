const heading = document.querySelector(".heading-main");

heading.addEventListener("click", ()=> {
  console.log("this is a console log")
});


const increment = document.querySelector(".increment");
const numberToChange = document.querySelector(".number-to-change");
const decrement = document.querySelector(".decrement");

increment.addEventListener("click", ()=>{
  numberToChange.textContent = parseInt(numberToChange.textContent) + 1
})

decrement.addEventListener("click", function(){
  numberToChange.textContent = parseInt(numberToChange.textContent) - 1
})

const h2Wrapper = document.querySelector(".h2-wrapper")
const h2Green = document.querySelector(".green-h2")
const h2Red = document.querySelector(".red-h2")

h2Green.addEventListener("click", function(){
  h2Green.classList.remove('green-h2');
h2Green.classList.add('red-h2');
})

h2Red.addEventListener("click", function(){
  h2Red.classList.remove('red-h2');
  h2Red.classList.add('green-h2');
})