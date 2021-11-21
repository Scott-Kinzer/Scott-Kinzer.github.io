class Quiz {
    constructor(arrayOfQuestions) {
        this.array = arrayOfQuestions;
        this.count = 0;
        this.number = 0;
    }

    startPlay() {
        this.createHtmlElements();
        let restartGame = document.getElementsByClassName('RESTART_GAME')[0];
        restartGame.style.display = "none";
        let x =  document.getElementsByClassName('wrapper_game')[0];
        let wrapperQuiz = document.getElementsByClassName('wrapper_quiz')[0];
            wrapperQuiz.style.display = "flex";
        x.style.display = "block";
        // console.log(x)
        document.getElementsByClassName('START_GAME')[0].style.display = "none";
        this.count = 0;
        this.number = 0;
        let quizTitle = document.getElementsByClassName('quiz_title')[0];
        quizTitle.style.display = "block";
        let showResult = document.getElementsByClassName('show_result')[0];
        showResult.style.display = "none";
        this.gamePlay();
    }

    gamePlay() {
        this.showQuestions(this.number);
    }

    showQuestions(num) {
        this.createHtmlElements();
        let itemFromHtml = document.getElementsByClassName('variant');
       

        console.log(num)
        if (num > this.array.length - 1) {
            let wrapperQuiz = document.getElementsByClassName('wrapper_quiz')[0];
            wrapperQuiz.style.display = "none";
            let showResult = document.getElementsByClassName('show_result')[0];
            showResult.textContent = `Ти відповів на ${this.count} питань з ${this.array.length}`;
            showResult.style.display = "block";
            let quizTitle = document.getElementsByClassName('quiz_title')[0];
            quizTitle.style.display = "none";
            let restartGame = document.getElementsByClassName('RESTART_GAME')[0];
            restartGame.style.display = "block";
            let that = this
            restartGame.addEventListener('click',  () => {
                   that.startPlay();
            })



        } else {

            let userCount = document.getElementsByClassName('user_count')[0];
            userCount.textContent = `${num + 1}/ ${this.array.length}`;
            let QUESTION = document.getElementById('question_title');
            
            let variants = this.array[num];
            QUESTION.textContent = variants[variants.length - 1];
            let arrTest = variants.filter((item, i) => i !== variants.length - 2 && i !== variants.length - 1);
            // console.log(arrTest)
            arrTest.forEach((item, i) => {
            
            itemFromHtml = document.getElementsByClassName('variant')[i];
            
            let that = this;
            itemFromHtml.textContent = item;

            itemFromHtml.addEventListener('click', () => {
                    that.checkRightAnswer(variants, item);
                    that.number++;
                    that.showQuestions(that.number);
            })
        })



        }
    }

    createHtmlElements() {
        let wrapperQuizMy = document.getElementsByClassName('wrapper_quiz')[0];
        wrapperQuizMy.innerHTML = "";
        for (let item = 0; item < 4; item++) {
            let vari = document.createElement('div');
            vari.classList.add('variant');
            wrapperQuizMy.append(vari);
        }

    }

    checkRightAnswer(array, value) {
        console.log(value)
            if (array[array.length - 2] === value) {
                this.count++;
            }
    }
}

let arrQuiz = [
    ["Та", "Нє", "Хезе", "Ех", "Та", "Оля топ?"],
    ["Та", "Та", "Та", "Та", "Та", "Троян мудак?"], 
    ["Такое", "Хезе", "Норм", "З маслом піде", "З маслом піде", "Епам топ?"],
    ["Та", "Хезе", "Шо таке джс", "Скучн", "Та", "Джс топ?"],
    ["Холодно", "Жарко", "Параша", "Ех", "Параша", "Як погодка?"]

]

let quizGame = new Quiz(arrQuiz);
// quizGame.startPlay();

document.getElementsByClassName('START_GAME')[0].addEventListener('click', () => {
    quizGame.startPlay.call(quizGame)
})

