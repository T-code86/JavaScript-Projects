 function isPalindromeChecker(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
 }

function PalindromeChecker(){

    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");

    if(isPalindromeChecker(inputText.value)){
        result.textContent = `"${inputText.value}" is a palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is Not a palindrome`;
    }

    result.classList.add('fadein');inputText.value = "";

}

document.getElementById('checkButton').addEventListener("click",
PalindromeChecker);