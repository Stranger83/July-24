function solve(input) {
    let num = Number(input);
    let res = "";
    for (let i = 1; i <= num; i++) {
        let currentTextNum = i.toString();
        let isSymmetrical = true;
        for (let j = 0; j < currentTextNum.length/2; j++) {
            if (currentTextNum[j] !== currentTextNum[currentTextNum.length - 1 - j]){
                isSymmetrical = false;
                break;
            }
        }
        if (isSymmetrical){
            res += `${currentTextNum} `;
        }
    }
    console.log(res);
}
