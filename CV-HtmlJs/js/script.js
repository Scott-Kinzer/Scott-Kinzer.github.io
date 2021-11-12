const stars = document.getElementsByClassName('fa-star');

Array.from(stars).forEach((star, i) => {
    star.addEventListener('click', () => setRate(i))
})

function setRate(num) {
    Array.from(stars).forEach(star => {
        star.classList.remove('checked');
    })

    for (let i = 0; i <= num; i++) {
        stars[i].classList.add('checked');
    }

}

const coverPage = document.getElementsByClassName('cover_page')[0];
const closeBtn = document.getElementsByClassName('close_btn');
const projectWindows = document.getElementsByClassName('project_window');

closeBtn[0].addEventListener('click', () => {
    projectWindows[0].style.display = 'none';
    coverPage.style.display = "none";
})


let dbProjects = [
    {
        title: "Public",
        prHref: "https://scott-kinzer.github.io/public/",
        id: 0

    },

    {
        title: "Shop",
        prHref: "https://scott-kinzer.github.io/Homework_html_final/",
        id: 1
    },

    {
        title: "FoodRecipe",
        prHref: "https://scott-kinzer.github.io/FoodRecipeAppVanillaJS/",
        id: 2
    },

    {
        title: "Portfolio",
        prHref: "https://scott-kinzer.github.io/Portfolio/",
        id: 3
    },

    {
        title: "People",
        prHref: "https://scott-kinzer.github.io/People/",
        id: 4
    },
]



const prjBtns = document.getElementsByClassName('my_project-wrap');
const titleEl = document.getElementsByClassName('title_project')[0];
const linkEl = document.getElementsByClassName('linkProj')[0];

Array.from(prjBtns).forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showWindowProject(i)
    })
})

function showWindowProject(id) {
    dbProjects.forEach(obj => {
        if (obj.id === id) {
            titleEl.textContent = obj.title;
            linkEl.href = obj.prHref;
        }
    })

    projectWindows[0].style.display = "flex";
    coverPage.style.display = "block";
}

coverPage.addEventListener('click', closePage
)

function closePage() {
    projectWindows[0].style.display = "none";
    this.style.display = "none";
}