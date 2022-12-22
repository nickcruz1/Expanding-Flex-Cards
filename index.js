let elements = document.querySelectorAll(".card");

for (let element of elements) {
  element.addEventListener('click', event => {
    elements.forEach(e => e.classList.remove('active'))
    element.classList.add('active');
  })
}

elements[0].style.backgroundColor = "blue";
elements[1].style.backgroundColor = "green";
elements[2].style.backgroundColor = "black";
elements[3].style.backgroundColor = "green";
elements[4].style.backgroundColor = "blue";

// Add background image to these cards 
// Ex. elements[0].style.background = "image.jpg";

