//intersection type -> type terdiri atau gabungan antara type2 yang ada.
type Tipe1 = string | number
type Tipe2 = boolean | number

//contoh intersection
type Universal = Tipe1 & Tipe2;

let universalData: Universal;
universalData = 0;

type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

//contoh intersection dengan object.
type ElevatedEmployee = Admin & Employee; 
const e1: ElevatedEmployee = {
    name: 'Adi',
    privileges: ['open-server'],
    startDate: new Date()
}

//jadi jika di cek ya type ini mirip dengan interface, jika type untuk menggabungkan nya menggunakan intersection ini (&)
//sedangkan jika interface menggabungkan nya menggunakan inheritance interface

type EmployeeType = Admin | Employee;
//Lebih dalam dari type Guard -> biasanya kita jika ingin mendefinisikan suatu value pada variable kita menggunakan typeof, namun untuk object dan array
//                               dia hanya akan di kenali sebagai object, bukan propertiesnya, oleh karena itu jika kita menggunakan object kita bisa menggunakan
//                               type guard "in" seperti contoh di bawah. in ini adalah untuk mengecek apakah string ini ada di properties object kita.
function printEmployeeType(emp: EmployeeType): void {
    console.log(emp.name);
    //ini untuk mengecek/guard apakah di emp ini ada properties object dengan nama privileges.
    if('privileges' in emp){
        console.log('Privileges ', emp.privileges);
    }
    
    if('startDate' in emp) {
        console.log('Start Date ', emp.startDate);
    }
}

class Car {
    drive() {
        console.log('Driving....')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck....')
    }

    loadCargo(amount: number){
        console.log('Loading Cargo..... ', amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function userVehicle(vehicle: Vehicle) {
    vehicle.drive();
    //sama dengan IN cuman kalo instanceof ini harus yang type nya class.
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

userVehicle(v1);
userVehicle(v2);

//cara lain untuk type guard .
interface Bird {
    //type ini berguna untuk di gunakan di switch case
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    //type ini berguna untuk di gunakan di switch case
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    //cara lain dari type guard adalah menggunakan switch case dimana kita harcode di setiap interface nya berupa type (literal type)
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at spedd: ', speed);
}

moveAnimal({type:'bird', flyingSpeed: 100})


//typescript casting
//kalo di cek type dari variable di bawah ini adalah HTMLElement padahal yang kita mau adalah HTMLInputElement, oleh karena itu kita harus menggunakan casting
//cara casting pertama dengan braket di awal nya seperti contoh di bawah
const userOuput = <HTMLInputElement>document.getElementById('user-output');

//cara casting kedua dengan menggunakan as di blakang.
const anotherUserOutput = document.getElementById('user-output') as HTMLInputElement;

userOuput.value = 'Hello Hai';

//cara casting ke tiga
const anotherAgainUserOutput = document.getElementById('user-output');
if(anotherAgainUserOutput){
    (anotherAgainUserOutput as HTMLInputElement).value = 'Hello Hai'
}


//Flexible properties on interface
interface ErrorContainer {
    //artinya properties nya bisa apa saja namanya dan jumlah nya asal nama properties nya string dan value nya juga string.
    [prop:string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Error Email not valid',
    username: 'adisiub'
}

//di typescript ini kita juga bisa melakukan function overload -> 1 function dengan nama sama namun parameter dan return value nya berbeda beda.
//tapi untuk jumlah parameter nya harus sama.
function acc(a: number, b: number):number;
function acc(a: string, b: string):string;
function acc(a: boolean, b: string): boolean;
function acc(a: any, b:any): any  {
    return a + b
};

acc("Hello ", "Steve"); // returns "Hello Steve" 
acc(10, 20);