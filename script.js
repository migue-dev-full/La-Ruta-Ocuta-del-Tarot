let list = document.querySelector('.slider .list');
let items = list.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;


next.onclick = function() {
    active = (active + 1) % lengthItems; // Wrap around using modulo
    reloadSlider();
  };
  
  prev.onclick = function() {
    active = (active - 1 + lengthItems) % lengthItems; // Wrap around using modulo
    reloadSlider();
  };

  function reloadSlider() {
    list.style.left = -items[active].offsetLeft + 'px';
  
    dots.forEach(dot => dot.classList.remove('active')); // Remove active class from all dots
    dots[active].classList.add('active'); // Add active class to current dot
  }
  
  dots.forEach((li, key) => { // Use index for clarity
    li.addEventListener('click', () => {
      active = key;
      reloadSlider();
    });
  });
  
console.log(next);

