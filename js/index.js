// Your code goes here

// [ ] mouseover event
let headerImage = document.querySelector(".intro img");
headerImage.addEventListener("mouseover", e => {
  //  https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
  // headerImage.src = "https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  e.target.src = "https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
});

// [ ] keydown
document.addEventListener("keydown", (e) => {
  document.body.style.backgroundColor = "blue"
})

// [ ] wheel
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  headerImage.style.transform = `scale(${scale})`;
}

let scale = 1;
headerImage.addEventListener("wheel", zoom)


// [ ] drag / drop



// [ ] load
// let headerImage = document.querySelector("img");
headerImage.addEventListener("load", (e) => {
  headerImage.style.width = "50%";
})

// [ ] focus
let textField = document.querySelector("textarea")
textField.addEventListener("focus", e => {
  e.target.style.backgroundColor = "pink"
  console.log()
})

// [ ] resize
window.addEventListener("resize", (e) => {
  let mainWindow = document.body;
  let height = mainWindow.scrollHeight;
  let width = mainWindow.scrollWidth;
  alert(`Your window is ${width}px by ${height}px`)
})

// [ ] scroll
window.addEventListener("scroll", e => {
  document.querySelector("p").style.fontSize = "3rem"
})
console.log(e.target)

// [ ] select
function logSelectedText(e) {
  let selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
  alert(`You selected: ${selection}`)
}
let textArea = document.querySelector("textarea")
textArea.addEventListener("click", logSelectedText)

// [ ] dblclick
const nav = document.querySelector("nav")
nav.addEventListener("dblclick", e => {
  nav.style.backgroundColor = "red";
  nav.style.opacity = 0.5;
  console.log(nav.style)
})

// prevent nav items from refreshing the page
document.querySelectorAll("a").forEach(navLink => {
  navLink.addEventListener("click", e => {
    e.preventDefault()
  })
})