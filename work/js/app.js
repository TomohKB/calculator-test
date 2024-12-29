//表示部分を取得
const display = document.getElementById("display");
//入力した数字や演算子を文字列として保存
let currentInput = "";
//計算結果を保存
let currentResult = null;
// display.value = "0"

const buttons = document.querySelectorAll("button");
// console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        const number = button.dataset.number;
        const operator = button.dataset.operator;
        const clear = button.dataset.clear;
        const equals = button.dataset.equals;
        
        if(number) {
            // +=はnumber + numberの意味
            currentInput += number;
            display.value = currentInput;
        } else if (operator) {
            // !==　両方が等しくなかったら
            if(currentInput !== "") {
                currentInput += `${operator}`;
                display.value = currentInput;
            }
        } else if (clear) {
            currentInput = "";
            currentResult = "";
            display.value = ""
        } else if (equals) {
            // tryはエラーが発生する可能性のあるコードを安全に実行するための構文
            try {
                // eval(関数)で計算する
                currentResult = eval(currentInput);
                display.value = currentResult;
                //stringは値を文字列にする
                currentInput = String(currentResult);
                // console.log(`計算結果: ${currentResult}`);
                
            }catch(error) {
                currentInput = "";
                display.value = "エラー";
            }
        }
    });
});