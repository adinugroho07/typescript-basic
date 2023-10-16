//pola typescript dalam membuat variable adalah berikut const/let namavariable: tipedata = value;

//jika kita ingin membuat variable tanpa menginisialisasi value nya maka kita menggunakan let.
//namun jika kita ingin membuat variable dan meng inisialisasi kan data nya maka kita menggunakan const.
let var1: number; 
let var2: string;
var1 = 2
var2 = 'initial data'

// ketika menggunakan const maka variable tersebut tidak bisa di re assign. jadi lebih flexible menggunakan let.
const var3: number = 9;
//var3 = 4; akan error , karena const tidak bisa di re assign.

//data type number . mau float mau integer akan di sama kan dengan type number.
const dataTypeNumber: number = 20;
const dataTypeNumberFloat: number = 30.5;

//data type String
const dataTypeString: string = 'adi'

//data type boolean
const dataTypeBoolean: boolean = true

//data type string array
const dataTypeStringArray: string[] = ['adi','nugroho','ganteng']

//data type string number
const dataTypeNumberArray: number[] = [0,2,4,5,6]

//data type object dan macam bentuk object nya
const person = {
    name: 'adi',
    age: 20,
    hobbies: ['badminton','code']
}

console.log(person.name)

//data type object namun di spesifickan per properties nya.
const personNew: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'adi',
    age: 20,
    hobbies: ['badminton','code']
}

console.log(personNew.hobbies[1])

//nested object. di tandai dengan cara value nya begini {}
const product: {
    id: string,
    price: number,
    tags: string[],
    details:{
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: { //details ini nested object di product
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}

//object lengkap dari properties hingga function.
const objectKalkulator: {
    data: number,
    nambah: (n1: number, n2: number) => number,
    kurang: (n1: number, n2: number) => number
} = {
    data: 2,
    nambah: (n1: number, n2: number): number => {
        return n1 + n2
    },
    kurang: (n1: number, n2: number): number => {
       return n1 - n2 
    }
}

//data type ENUM . gunanya enum ini untuk menggantikan hardcode.
//jika enum ini tidak di inisialisasi value nya maka yang di gunakan adalah number biar pun pada value kita tulis dia string.
enum Roles { // enum ini value nya di inisialisasi value nya as string.
    ADMIN = 'ADMIN',
    OFFICER = 'OFFICER',
    RELEASER = 'RELEASER'
}

enum Operator {//enum ini value nya tidak di inisialisasi, oleh karena itu default type nya akan menjadi number.
    PERTAMBAHAN,
    PENGURANGAN,
    PEMBAGIAN,
    PERKALIAN
}

//data type tupples -> data type seperti array namun untuk length dan type nya harus fix sesuai ketika tupple di definisikan.
const personNewAgain: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number,string] //contoh data type tupples. value pada array role ini harus 2 element, element 1 itu harus number dan element ke 2 harus string.
} = {
    name: 'adi',
    age: 20,
    hobbies: ['badminton','code','mendaki'],
    role: [2, Roles.ADMIN] //kalo element 1 di ganti ke string pasti error karena di tupples nya di set element 1 harus number.
}

//data type any -> merupakan data type yang bisa di masukkan tipe data apa saja seperti contoh di bawah ini.
let dataTypeAny: any;
dataTypeAny = true
dataTypeAny = 20
dataTypeAny = ['asdasd']
dataTypeAny = 'asdasfas'

//di dalam tipe data kita juga bisa menggunakan union type atau memberitahu bahwa tipe data yang di gunakan tidak hanya satu, seperti contoh di bawah.
const dataTypeUnion: number | string = 20;//union data type bisa di symbol kan dengan pipe | . artinya variable tersebut value nya bisa berupa string atau number.

//data type literal -> data yang kita definisikan sendiri value nya dan jika nanti variable yang menggunakan tipe ini , 
//                     value nya tidak sama dengan value yang kita definisikan di awal maka akan error. contoh nya seperti di bawah.
const dataTypeLiteral: 'satu' | 2 = 2;// jika value pada variable dataTypeLiteral tidak berisikan satu atau 2, maka dia akan error.
const dataTypeLiteral1: 'Good' | 'vibes' | 'morning' = 'morning';

//di type script kita bisa membuat data tipe kita sendiri. contoh nya seperti di bawah ini.
type FirstType = 'as-number' | 'as-text'; // isi dari type ini merupakan data type literal.
type NumString = number | string

//FirstType merupakan data type yang kita build sendiri yang isi nya merupakan data type literal.
function pertambahan(n1: NumString, n2: NumString, output: FirstType){ 
    
    if(output == 'as-number'){
        return +n1 + +n2//tanda + di depan variable ini gunakan untuk mencovert number nya menjadi number in case jika yang di masukkan adalah string
    }

    if(output == 'as-text'){
        return n1.toString() + n2.toString()
    }
    return;
}

console.log(pertambahan(20,34,'as-text'));
console.log(pertambahan(20,34,'as-number'));

//contoh pembuatan data type yang menggunakan object.
type Inputan = {n1: number, n2: number, operator: number}

const functKalkulator = (input: Inputan) : number | string => {
    let result: number = 0;
    
    if(input.operator === Operator.PERTAMBAHAN){
        result = input.n1 + input.n2
    }

    if(input.operator === Operator.PENGURANGAN){
        result = input.n1 - input.n2
    }

    if(input.operator === Operator.PERKALIAN){
        result = input.n1 * input.n2
    }

    if(input.operator === Operator.PEMBAGIAN){
        result = input.n1 / input.n2
    }

    return result;
}

//contoh pemanggilannya.
const objKalkulator: Inputan = {n1: 20, n2: 4, operator: Operator.PEMBAGIAN}
console.log(functKalkulator(objKalkulator))

//data type unknown -> hampir sama dengan data type Any namun dia ini tidak bisa di assign ke variable lain selain variable dengan data type unknown. variable
//                     ini lebih strict karena konsep nya adalah kita mau sebuah variable yang kita belum tau ini akan berupa string kah, number atau array.
//                     oleh karena itu jika kita ingin menggunakan variable tersebut kita perlu melakukan pengecekan/cast.
let dataTypeUnknown: unknown;
dataTypeUnknown = 3;
dataTypeUnknown = 'Adi';

let dataString: string;
//dataString = dataTypeUnknown; -> dia akan error karena unknown tidak bisa di assign ke variable lain selain variable dengan data type unknown
//untuk bisa meng assign variable tersebut maka kita perlu cast terlebih dahulu seperti contoh di bawah ini.
function castUnknown(n1: unknown): void{
    if(typeof n1 === 'string'){
        dataString = n1
    }
}
castUnknown(dataTypeUnknown);// baru dia bisa di assign ke variable string.


//spread operator -> di gunakan untuk mengeluarkan seluruh element pada array.
const hobbies = ['badminton','tenis','runner']
const activeHobbies = ['hiking']

//cara lama dalam menambahkan array menggunakan push()
activeHobbies.push(hobbies[0],hobbies[1],hobbies[2])
//jika menggunakan spread (...) operator
activeHobbies.push(...hobbies)// jadi seluruh element pada array hobbies akan di pull/dikeluarkan dan di push ke activeHobbies

//spread operator juga bisa di gunakan di object
const newObject = {
    name: 'Max',
    age: 30
}

//cara lama copy object
const copyObject = newObject
//dengan spread operator
const copyObjectnew = {...newObject}//jadi object newObject properties nya akan di keluar kan semua dan di tambahkan ke object baru.

//spread parameter
const anotherAdd = (...numbers: number[]) => { //artinya parameter numbers ini berupa sebagai array number jadi parameter nya bisa panjang/flexible
    return numbers.reduce((currenResult, currentValue) => {
        return currenResult + currentValue;
    }, 0);
};
const addednumbers = anotherAdd(1,2,3,4,5,6,7,8,9,10)
console.log('Pertambahan : ',addednumbers);

//array object destructuring
const newHobbies = ['badminton','coding','dota']
//cara lama untuk mengeluarkan value array dan di assign ke variable 1 per 1
const hobbies1 = newHobbies[0]
const hobbies2 = newHobbies[1]
const hobbies3 = newHobbies[2]
//cara untuk mengeluarkan value array dan di assign ke variable dengan object destructuring
const [hobby1, hobby2, hobby3] = newHobbies;//value pada array element ke 1 akan di assign ke variable hobby1, dan seterusnya.

const objectNew = {
    pertama: 'pertama',
    kedua: 'kedua'
}
//contoh array destructuring pada object dan override variable name.
const {pertama: kesatu, kedua} = objectNew
console.log(kesatu,kedua)
/*
array destructuring ini bisa di gunakan pada array dan object.
pada array :
    - value yang di pull out pada array dia akan di assign ke variable secara berurutan, maksudanya element 1 akan di assign ke varible 1 dan seterusnya.
    - nama variablenya bisa bebas.
    - sytanks nya -> const [namavariable1,variable ke n] = array;
pada Object :
    - nama variable nya harus berupa nama key properties pada object nya, misa di dalam object ada properties name, maka variable yang akan di assign harus name juga.
    - nama variable nya tidak bisa bebas harus sama seperti key object nya.
    - namun kita bisa juga override variable nya dengan cara berikut -> {variable dengan nama key properties: newvariable}
    - syntaks -> const {variable dengan nama key properties} = object
*/