let list = document.querySelector('.slider .list');
let items = document.querySelector('.slider .list .item');
let dots = document.querySelector('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;


next.onclick = function(){
    if (active + 1 > lengthItems){
        actuve = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if (active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left + -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(reloadSlider);
    refreshSlider = setInterval(()=> {next.click()}, 3000);
}

dots.forEach(li, key) => {
    li.addEventListener('click', function(){
    active = key;
    reloadSlider();
})

console.log(next);

}