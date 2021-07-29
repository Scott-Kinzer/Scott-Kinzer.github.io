const itemStack = document.querySelectorAll('.stack__item');
const itemCard = document.querySelectorAll('.stack__card');
const stack = document.querySelector('.stack__inner');
const itemHeader = document.querySelectorAll('.header__card');
const btnHeader = document.querySelector('.header__button');
const blur = document.querySelector('.blur');
const pointer = document.querySelector('.pointer__btn');
const works = document.querySelector('.works');

pointer.addEventListener('click', () => {
    let x = 0;
    works.style.pointerEvents = "auto";
   let z = 50;
    // works.style.background = "white";
    let b = setInterval(() => {
        works.style.opacity = `${x = x + 0.03}`;
        // console.log(works.style.opacity);
       
        if (x > 0.7) {
            clearInterval(b);
        }

        

    }, 50);


    // let c = setInterval(()=> {
    //     pointer.style.left = `${z = z - 0.2}%`;
    //     pointer.style.top = `${z = z - 0.2}%`;
        
        
    // }, 5)
    let raf = null;
    function repeat() {
        pointer.style.left = `${z = z - 0.2}%`;
        pointer.style.top = `${z = z - 0.2}%`;
       
        let raf = requestAnimationFrame(repeat)

        if (z <10 ) {
            cancelAnimationFrame(raf)
        }
    }

    requestAnimationFrame(repeat);




}, { once: true })


btnHeader.addEventListener('click', () => {
    itemHeader.forEach(item => {
        item.classList.toggle('act');
    })
})


function clickHandler(x) {

    let z = 0;
    itemCard.forEach((item) => {
        item.classList.add('hidden');
        item.classList.remove('show');
        item.style.opacity = 0;
    })

    itemStack.forEach((item) => {
        item.classList.remove('active');

    })

    itemCard[x].classList.remove('hidden');
    itemCard[x].classList.add('show');
    itemStack[x].classList.add('active');

     let b = setInterval(() => {
        itemCard[x].style.opacity = z + 1
        if (z > 99) {
            clearInterval(b);
        }
    },300)



}

clickHandler(2);

itemStack.forEach((item, i) => {
    item.addEventListener('click', () => clickHandler(i));
})


VANTA.NET({
    el: stack,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xdab9c7,
    backgroundColor: 0xb16ad3,
    maxDistance: 32.00
  })


  window.addEventListener('scroll', function() {
    if (pageYOffset > 300) {
        blur.style.opacity = "1";
        blur.style.backgroundColor = "purple";

    } else {
        blur.style.opacity = "0.47";

    }

  });




