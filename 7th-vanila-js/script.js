const selectNumField = document.querySelector("#select__number");

const guessNumField = document.querySelector("#guess__number");
const guessNumSubmit = document.querySelector("#guess__submit");

function takeNum() { // 숫자를 가져오는 것에 대한 함수(이 함수가 동작하기 위해 필요한 데이터{매개변수})
    /*event.preventDefault(); // 매개변수가 작동할 때 브라우저의 기본 동작을 하지 않게 해준다*/
    const maxNumField = selectNumField.value; // 숫자가 작성되는 form 값의 변수
    if (maxNumField <= 0) {
        alert(`${maxNumField} is cannot be a value. Please use only positive integers 😉`);
        // alert 말곤 없을까?
    } else if (maxNumField < 10) {
        alert(`${maxNumField}? I think that was too short. Be a man buddy 😉 maybe over 10? `);
    } else if (maxNumField > 99) {
        alert('Go outside and hang out with someone 🖥️🔨')
    }
    else {
        localStorage.setItem("maxNumField", maxNumField); // 키와 값
    }
    
}

selectNumField.addEventListener("change", takeNum);
// 코드가 점점 복잡해지다보니 이름도 잘 지어야하는데
// 이게 맞는 걸까 어렵다