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
    // pointer.classList.add('no__transform');
    let z = 50;
    // works.style.background = "white";
    let b = setInterval(() => {
        works.style.opacity = `${x = x + 0.03}`;
        // console.log(works.style.opacity);

        if (x > 0.7) {
            clearInterval(b);
        }
    }, 50);


    let raf = null;

    function repeat() {
        // pointer.style.left = `${z = z - 5}%`;
        pointer.style.top = `${z = z - 5}%`;

        let raf = requestAnimationFrame(repeat)

        if (z < 15) {
            cancelAnimationFrame(raf)
        }
    }

    requestAnimationFrame(repeat);




}, {
    once: true
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
    }, 300)



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
    color: 0x0,
    backgroundColor: 0xffffff,
    points: 19.00
  })


// window.addEventListener('scroll', function () {
//     if (pageYOffset > 300) {
//         blur.style.opacity = "1";
//         blur.style.backgroundColor = "purple";

//     } else {
//         blur.style.opacity = "0.47";

//     }
// });


document.querySelectorAll('a.scroll').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.header__nav').offsetHeight

        const elementPosition = scrollTarget.getBoundingClientRect().top
        console.log(elementPosition);
        const offsetPosition = elementPosition - 70;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })

    })
})

const circleItems = document.querySelectorAll('.circle');
const modalWindow = document.querySelector('.modal__window')
const infoModal = document.querySelector('.info__modal')
const modalClose = document.querySelector('.modal__close');
const overlay = document.querySelector('.overlay');

modalClose.addEventListener('click', () => {
    modalWindow.classList.add('closed')
    modalWindow.classList.remove('activeModal')
    overlay.classList.remove('cool');
})

circleItems.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        showFunction(i)
        modalWindow.classList.remove('closed')
        modalWindow.classList.add('activeModal')
        overlay.classList.add('cool');
        // document.getElementsByTagName('body')[0].style.pointerEvents = "none";

    })

})




document.getElementsByTagName("body")[0].addEventListener('click', (e) => {
    if (e.target != modalWindow && e.target == overlay) {
        console.log(e.target)
        modalWindow.classList.add('closed')
        modalWindow.classList.remove('activeModal')
        overlay.classList.remove('cool');
    }
})





function showFunction(i) {
    // const elem = document.createElement("div");
    // elem.classList.add('inform');
    const temp = dataBase[i];
    infoModal.innerHTML = `
      
        <div class="img__block"><img class="js__img" src="${temp.image}"/></div>
        <div class="js__text">
        <div class="title__modal">${temp.title}</div>
        <a href="${temp.link}">Link</a>
        </div>

    `
}


const dataBase = [{
        title: "Test",
        image: "img/nature.jpg",

    },

    {
        title: "Food js aplication",
        image: "img/food.png",
        link: "https://qwar-svg.github.io/FoodRecipeAppVanillaJS/"
    },

    {
        title: "React ToDo app",
        image: "img/reactToDo.png",
        link: "https://qwar-svg.github.io/react-toDo-app/"
    },

    {
        title: "Make new project... Cheese!",
        image: "img/one.jpg"
    },

    {
        title: "Make new project.....",
        image: "img/one.jpg"
    },
]


const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__navigation');
const Mainnav = document.querySelector('.header__nav');



burger.addEventListener('click', () => {
    console.log(1);
    burger.classList.toggle('is-active');
    nav.classList.toggle('disp');
    Mainnav.classList.toggle('minHidth');
});




// console.log(document.getElementsByTagName('body')[0].clientWidth);

// if (document.getElementsByTagName('body')[0].clientWidth > 778 && Mainnav.style.minHeight == "100vh" ) {
//     console.log(document.getElementsByTagName('body')[0].clientWidth )
//     nav.style.display = "";
//     Mainnav.style.minHeight = "70px";
// }


function checking() {
    setInterval(() => {

        if (document.getElementsByTagName('body')[0].clientWidth > 778 && Mainnav.classList.contains('minHidth')) {
            console.log(document.getElementsByTagName('body')[0].clientWidth)
            burger.classList.remove('is-active');
            nav.classList.remove('disp');
            Mainnav.classList.remove('minHidth');
        }
    }, 500)
}

checking();