const selectNumField = document.querySelector("#select__number");

const guessNum = document.querySelector("#guess");
const guessNumField = document.querySelector("#guess__number");

const resultContents = document.querySelector('.result__text')
const resultWinOrNot = document.querySelector('.result__win-or-not')

const randomNumberGame = {
    takeSelectNum: function () {
        const maxNum = selectNumField.value;
        if (maxNum >= 0) {
            localStorage.setItem("maxNum", maxNum);
            resultContents.innerText = ``;
        } else {
            localStorage.removeItem("maxNum", maxNum);
            resultContents.innerText = `Player, ${maxNum} is not a valid value. Please enter a value greater than or equal to 0.`;
        }
    },

    takeGuessNum: function () {
        const setNum = guessNumField.value;
        localStorage.setItem("setNum", setNum);
    },

    sendNum: function (event) {
        event.preventDefault();
        const selectNumResult = localStorage.getItem("maxNum");
        const guessNumResult = localStorage.getItem("setNum");
        const comNumResult = Math.floor(Math.random() * selectNumResult);

        if(selectNumResult >= guessNumResult) {
            resultContents.innerText = `You chose: ${guessNumResult}, the machine chose: ${comNumResult}.`;
            if(comNumResult == guessNumResult) {
                resultWinOrNot.innerText = `You win!`
            } else {
                resultWinOrNot.innerText = `You lost!`
            }
        } else {
            resultContents.innerText = `Please specify the exact range`;
            resultWinOrNot.innerText = ``;
        }
    }
};

selectNumField.addEventListener("change", randomNumberGame.takeSelectNum);
guessNumField.addEventListener("change", randomNumberGame.takeGuessNum);
guessNum.addEventListener("submit", randomNumberGame.sendNum);
// 코드가 점점 복잡해지다보니 이름도 잘 지어야하는데
// 이게 맞는 걸까 어렵다

// 조금 더 짧게 짜볼것