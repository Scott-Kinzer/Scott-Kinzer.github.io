
const btn__right  = document.querySelector('.btn__right');
const btn__left  = document.querySelector('.btn__left');
const slide  = document.querySelector('.slide');
const array = ['first', 'second', 'third'];
const blocks = document.querySelectorAll('.info');



let z = 0;
btn__right.addEventListener('click', () => {
    slide.classList.remove("first", "second", "third");
    if (z < 2) {
        slide.classList.add(array[++z]);
    } else {
        z = 0;
        slide.classList.add(array[z]);
    }
    showBlock(z)
})
btn__left.addEventListener('click', () => {
    slide.classList.remove("first", "second", "third");
    if (z <= 0) {
        z = 2;
        slide.classList.add(array[z]);
    } else {
        slide.classList.add(array[--z]);
    }
    showBlock(z)
})

function showBlock(i) {
    blocks.forEach(item => {
        item.classList.remove("active");
    });
    blocks[i].classList.add("active");
}


const buy  = document.querySelector('.buy__wrapper');
const counter  = document.querySelector('.counter');
const modalWrapper  = document.querySelector('.modal__wrapper');

let zero = 0
buy.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains("buy__item") && e.target.tagName == "BUTTON") {
        let product = e.target.parentNode.childNodes[3].innerText;

        let x = pushData(product);
        modalWrapper.append(x);
    }
})

function pushData(product) {

    const temp = document.createElement('div');
    temp.classList.add("product__item");

    const title = document.createElement('div');
    title.classList.add("product__title");

    title.innerText = `${product}`;

    const count = document.createElement('div');
    count.classList.add("product__count");


    const wrap = document.createElement('div');
    wrap.classList.add('calc');
    const plus = document.createElement('div');
    plus.classList.add('plus');

    plus.innerText = "+"

    let number = document.createElement('span');
    number.classList.add("number");
    number.innerText = "1";

    const minus = document.createElement('div');
    minus.classList.add('minus');

    minus.innerText = "-"

    let deleteItem = document.createElement('div');
    deleteItem.innerText = "X";
    deleteItem.classList.add("delete__item");

    wrap.append(minus);
    wrap.append(number);
    wrap.append(plus);

    let testArr = [];
    let products = document.querySelectorAll('.product__title');
    products.forEach((item) => {
        testArr.push(item.innerText);
    })

    if (testArr.includes(product)) {
        return ""
    } else {
        counter.innerText = counter.innerText = `${parseInt(counter.innerText) + 1}`;
        count.innerText = `${counter.innerText}`;
        const wrapperText = document.createElement('div');
        wrapperText.classList.add('wrapper__text');
        wrapperText.append(count);
        wrapperText.append(title);
        temp.append(wrapperText);
        temp.append(wrap);
        temp.append(deleteItem);

        return temp;
    }


}

const allBtns = document.querySelectorAll('.buy__btn');
const modalWindow = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const shop = document.querySelector('.shop');

shop.addEventListener('click', () => {
    modalWindow.classList.remove('hiding');
    overlay.classList.remove('hiding');
})

allBtns.forEach((item) => {
    item.addEventListener('click' , () => {
        modalWindow.classList.remove('hiding');
        overlay.classList.remove('hiding');


    })


})

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add('hiding');
    overlay.classList.add('hiding');

})

overlay.addEventListener('click', () =>{
    modalWindow.classList.add('hiding');
    overlay.classList.add('hiding');
    popUp.classList.add('hiding');
    burgerMenu.classList.remove("burger__menu-active");

})

let changeNum = 0;
const moodal = document.querySelector('.modal');
moodal.addEventListener('click', (e) => {

    if (e.target.className === "plus") {
        // console.log(e.target.parentNode.childNodes[1])
        e.target.parentNode.childNodes[1].innerText = `${parseInt(e.target.parentNode.childNodes[1].innerText) + 1}`;
    }

    if (e.target.className === "minus") {
        // console.log(e.target.parentNode.childNodes[1])
        e.target.parentNode.childNodes[1].innerText = `${parseInt(e.target.parentNode.childNodes[1].innerText) - 1}`;
    }

    if (e.target.className === "delete__item") {
        e.target.parentNode.remove();
        counter.innerText = `${parseInt(counter.innerText) - 1}`;
    }
})

const photos = document.querySelectorAll('.description__photo');
const imgList = document.querySelectorAll('.description__photo img');
const largeImg = document.querySelector('.large-image');
const popUp = document.querySelector('.popup');
const closingBtn = document.querySelector('.close-btn');
const arrowLeft = document.querySelector('.arrow-btn__left');
const arrowRight = document.querySelector('.arrow-btn__right');


photos.forEach((photo, i) => {
    photo.addEventListener('click', () => {
        setUpPhoto(i)
        popUp.classList.remove('hiding');
        overlay.classList.remove('hiding');
    })
})

function setUpPhoto(id) {
    let temp = imgList[id].src.match(/img.*/g);
    largeImg.src = `./${temp[0]}`;
    console.log(largeImg)

}


closingBtn.addEventListener('click', () => {
    popUp.classList.add('hiding');
    overlay.classList.add('hiding');
})


let counting = 0;
arrowLeft.addEventListener('click', () => {

    if (counting === 0) {
        counting = imgList.length - 1;
        setUpPhoto(counting)
    } else {
        setUpPhoto(--counting);
    }
})

arrowRight.addEventListener('click', () => {
    if (counting === imgList.length - 1) {
        counting = 0;
        setUpPhoto(counting)
    } else {
        setUpPhoto(++counting);
    }
})

const headSite = document.querySelector('.header__nav');

const scrollPosition = window.pageYOffset;
let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > lastScroll) {
        headSite.classList.add('hiding');
    } else {
        headSite.classList.remove('hiding');
    }


    lastScroll = window.pageYOffset;

})

const searchText = document.querySelector('.search__text');
const btnFind = document.querySelector('.find');
const searchWrapper = document.querySelector('.search__wrapper');

btnFind.addEventListener('click', async () => {
    searchWrapper.textContent = '';
    let text = searchText.value;

    let getResult = await getData(text);
    console.log(getResult.books)

    renderBooks(getResult.books);

})

async function getData(value) {
    const data = await fetch(`https://api.itbook.store/1.0/search/${value}`);
    return await data.json();
}

function renderBooks(array) {
    if (array.length === 0) {
        let temp = document.createElement('div')
        temp.classList.add('item__search');
        temp.textContent = "NOTHING FOUND";
        searchWrapper.append(temp);
    } else {
        array.forEach(item => {
            let temp = document.createElement('div')
            temp.classList.add('item__search');
            temp.innerHTML = `
                <img class ="cover__img" src=${item.image} alt="" />
                <div class="title">${item.title}</div>
                <div class="price">${item.price}</div>
        `;
            searchWrapper.append(temp);
        })
    }
}


// async function startData(func1, func2) {
//     let getResult = await func1("mongodb");
//
//     func2(getResult.books);
// }
//
// startData(getData, renderBooks);

const btnBurger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');

btnBurger.addEventListener('click', () => {
    burgerMenu.classList.add("burger__menu-active");
    overlay.classList.remove("hiding");
})

const burgerClose = document.querySelector('.burger__close-btn');

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove("burger__menu-active");
    overlay.classList.add("hiding");
})












