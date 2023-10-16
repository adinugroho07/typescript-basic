//function with return type. polanya adalah function namafunction(parameter): return type/void { return value sesuai return type nya }
function add(n1: number, n2: number): number{ //karena return typenya adalah number maka hasil dari n1 + n2 harus berupa number.
    return n1 + n2
}

//contoh function dengan arrow function dan menggunakan return type void (tidak memberikan return type)
const printNow = (say: string): void => {
    console.log('Hai ', say);//method ini tidak akan me return data karena type nya adalah void.
}

//return type never -> sama seperti void namun ini sebetulnya lebih memperjelas saja di code bahwa method ini memang tidak mengembalikan value.
const generateError = (): never => {
    throw {errorCode: 500,errorMessag: 'error ocured'}
}

//function as data Type
let combinedValues: Function; // bisa gini.
combinedValues = add
console.log(combinedValues(10,40))

//function as data type more specific
let combinedValuesNew: (a: number, b: number) => number; 
//di atas ini artinya function yang boleh di gunakan adalah function yang mempunyai 2 parameter dengan data type number dan return type nya number.
combinedValuesNew = add;
console.log(combinedValuesNew(10,40))

//pembuatan data type function yang specific.
type Pungsi = (a: number, b: number) => number; // membuat data type sendiri
let combinedValuesBaruLagi: Pungsi;//menggunakan data type yang di build sendiri.
combinedValuesBaruLagi = add;
console.log(combinedValuesBaruLagi(10,40))

//data type function and callbacks
function addHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2
    cb(result)
}

addHandle(30,34, (result) => {
    console.log(result)
})

const button = document.querySelector('#click')

if(button){
    button.addEventListener('click', () => {
        alert('this is from typscript')
    })
}

//dalam function ini kita bisa memberikan default value pada parameter.
const adding = (n1: number = 2, n2: number = 4) => n1 + n2;
console.log(adding(2))

