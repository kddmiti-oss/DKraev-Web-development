
//Задание 1

/*
Многострочный комментарий
ауечвскнеапмгинортьшщлбщдюзж
*/

/*
let variable1 = 123; // создал переменную
const variable2 = "Hello Word";
variable1 = 321;
console.log(variable1);
console.log(variable2);
console.log(variable1, variable2);

let variable3 = 123 * "vard0";
console.log(variable3);
*/

//Задание 2

/*
let varibale10zero = 1e10;
console.log(varibale10zero);

let variable5AfterComma = 5e-5;
console.log(variable5AfterComma);

let variableStringInNumber = Number("1234.1234");
console.log(variableStringInNumber);

let variableNumber1 = 0.3;
let variableNumber2 = 0.6;
console.log(Math.floor(variableNumber1));
console.log(Math.ceil(variableNumber1));
console.log(Math.round(variableNumber1));
console.log(Math.floor(variableNumber2));
console.log(Math.ceil(variableNumber2));
console.log(Math.round(variableNumber2));

console.log(NaN === NaN);
*/

//Задание 3

let cityMagnitogorsk = "МАГНИТОГОРСК".toLowerCase();
console.log(cityMagnitogorsk);

let strFromUpper = 'магнитогорск';
console.log(strFromUpper.slice(0, 1).toUpperCase() + strFromUpper.slice(1));

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        console.log(str.substr(0, maxlength-1) + '…');
    }
    else {
        console.log(str);
    }
}

truncate("lalalala", 5);

