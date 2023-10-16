//contoh pembuatan class
class Department {
    //readonly ini membuat properties id ini setelah di inisialisasi akan menjadi readonly, jadi gabisa di ubah lagi data nya.
    private readonly id: number;//properties
    private deptname: string;
    private employees: string[] = [];

    constructor(id: number, deptname: string) {//contstructor yang akan di eksekusi ketika class di panggil.
        this.id = id
        this.deptname = deptname
    }

    public get ID(): number{
        return this.id
    }

    //dalam setter getter kita bisa menamakan method nya sama tapi di recomendasikan berbeda
    //contoh method setter
    public set Department(deptname:string){
        this.deptname = deptname;
    }

    //contoh method getter
    public get Department():string {
        return this.deptname
    }

    public set Employee(value: string ){
        if(!value){
            throw new Error('Please Add In A Valid Value')
        }
        this.addEmployee(value);
    }

    public addEmployee(employe: string): void{
        this.employees.push(employe)
    }

    public get Employees(): string[] {
        return this.employees
    }

    public printEmployeeInformation(): void{
        console.log('Employee Length : ',this.employees.length)
        console.log('Employee: ', this.employees)
    }

}

//another class dengan shorthand
class Remote {
    //parameter yang ada di dalam constructor ini akan menjadi properties class .
    constructor(private id: number, private name: string){
        this.id = id;
        this.name = name;
    }

    public getName(): string {
        return this.name
    }

    public getId(): number {
        return this.id
    }
}

const department = new Department(1,'Finance')
//contoh pengakses an setter method. jadi dia akan di treat sebagai properties, bukan sebagai method yang di assign value nya di parameter nya.
department.Department = 'IT'
department.Employee = 'adi'
department.Employee = 'budi'
department.Employee = 'anto'
//contoh memanggil getter mehtod nya. jadi dia akan di treat sebagai properties, bukan sebagai method
console.log('Departmen Name : ',department.Department)
department.printEmployeeInformation()
console.log(department,department.Department)

//inheritance
class Human {
    private id: number;
    private gender: string;
    private action: string[];

    constructor(id: number, gender: string, action: string[]){
        this.id = id;
        this.gender = gender;
        this.action = action;
    }

    public get getId(): number {
        return this.id
    }

    public get getGender(): string {
        return this.gender
    }

    public get getAction(): string[] {
        return this.action
    }

    public set Gender(value: string) {
        this.gender = value;
    }

    public set Action(value: string|string[]) {
        if(typeof value === 'string'){
            this.action.push(value);
        }

        if(typeof value === 'object'){
            this.action = value;
        }
    }

    public printSummary(): void {
        console.log('=====print from human========');
        console.log('Id : ', this.getId)
        console.log('Gender : ', this.getGender)
        console.log('List Action : ', this.getAction);
    }
}

//class Male inherit class Human. class Male adalah child dari class Human.
//kita tidak bisa meng inherit lebih dari 1 class, jadi hanya bisa 1 class saja, tapi bisa implement muntiple interface.
class Male extends Human {
    private tinggi: number;
    private warnakulit: string;
    private name: string;

    constructor(tinggi: number, warnakulit: string, name: string, human: Human){
        //super() ini berguna untuk memanggil atau mengeksekusi constructor dari parent class nya(clas Human)
        //jadi seperti inisialisasi object parent class nya dulu baru ke child nya.
        super(human.getId,human.Gender,human.getAction)//harus manggil super() dulu , kalo engga dia error.
        this.tinggi = tinggi;
        this.warnakulit = warnakulit;
        this.name = name;
    }

    //override mthod from 
    public printSummary(): void {
        this.Action = 'ngepel';//manggil method di parent class
        this.Action = 'nyapu';
        console.log('=====print from male========');
        console.log('name : ', this.name);
        console.log('Gender : ', this.Gender)
        console.log('List Action : ', this.Action);
        console.log('Tinggi : ', this.tinggi);
        console.log('Warna Kulit : ', this.warnakulit);
    }

}
const human = new Human(1,'Cowo',['main anu','main nganu','ngoding']);
human.printSummary()
const male = new Male(177 , 'putih' , 'adi', human);
male.printSummary()

/*
static method dan properties -> method dan properties yang bisa di panggil langsung tanpa harus inisialisasi object. contoh nya di bawah.
konsep dari static ini adalah kita dapat membuat sebuah properties/method secara static di sebuah class dan kita dapat memanggil method/properties
tersebut tanpa harus membuat sebuah instance class(inisialisasi class). jadi dia seperti membuat group sendiri di dalam class tersebut yang isi nya 
adalah properties atau method yang static.

kita tidak bisa membuat construktor di class tersebut menjadi static
*/
//contoh static pada class
class Mouse {
    static brand: string = 'razer'
    private nama: string;
    private berat: number;
    private fitur: string[];

    constructor(nama: string, berat: number, fitur: string[]) {
        this.nama = nama;
        this.berat = berat;
        this.fitur = fitur;
    }

    set Nama(value: string) {
        this.nama = value;
    }

    get getNama(): string {
        return this.nama;
    }

    set Berat(value: number){
        this.berat = value;
    }

    get getBerat(): number {
        return this.berat
    }

    set Fitur(value: string) {
        this.fitur.push(value);
    }

    get getFitur(): string[] {
        return this.fitur
    }

    public summaryMouse() {
        console.log('=========mouse========')
        //untuk pengaksesan static properties atau method di dalam class harus menggunakan namaclassnya.namamethod/namaproperties nya.
        console.log('brand : ', Mouse.brand)
        console.log('nama : ', this.getNama);
        console.log('berat : ', this.getBerat)
        console.log('fitur : ', this.getFitur);
    }

    public static summaryMouse(mouse: Mouse){
        console.log('=========mouse========')
        //kenapa di method summaryMouse yang disini kita bisa menggunakan this.brand, karena method summaryMouse ini kita set static,
        //sehingga dia masuk ke dalam group static dimana di dalam group static tersebut terdapat variable brand. makanya dia bisa langsung pake this.
        console.log('brand : ', this.brand)
        console.log('nama : ', mouse.getNama);
        console.log('berat : ', mouse.getBerat)
        console.log('fitur : ', mouse.getFitur);
    }

    public static setBrand(value: string){
        Mouse.brand = value;
    }
}
const mouse = new Mouse('Deathader', 3, ['1500dpi','smoth surface','mechanical click'])
mouse.summaryMouse();
Mouse.summaryMouse(mouse);
//contoh pemanggilan langsung static properties yang ada di class Mouse. jadi bisa langsung di panggil tanpa harus inisialisasi class tersebut.
console.log(Mouse.brand)
//contoh pemanggilan langsung static method yang ada di class Mouse
Mouse.setBrand('Logitech')
console.log(Mouse.brand)

//abstract class -> sebuah class yang kita bisa mendifinisikan method dan variable nya tanpa harus mengisi kan value atau body method nya.
abstract class Crud {

    public abstract addData(value: string): void;
    public abstract updateData(value: string,index: number): void;
    public abstract displayData(): void;
    public abstract getAllData(): string[];
    public abstract getDataByIndex(index: number): string;

}

//jika kita extend dari abstract class maka semua class yang abstract di class parent nya harus di implement.
class Barang extends Crud {

    constructor(private data: string[]){
        super()
        this.data = data
    }
    
    public addData(value:string) {
        this.data.push(value);
    }

    public updateData(value: string, index: number) {
        this.data[index] = value;
    }

    public displayData(){
        console.log(this.data)
    }

    public getAllData(): string[] {
        return this.data
    }

    public getDataByIndex(index: number): string {
        return this.data[index];
    }
}


//private constructor & singleton (1 object yang sama di pakai berulang)
class Food {
    private name: string;
    private taste: 'sweet' | 'sour' | 'salt' | 'spicy';
    private static instance: Food;

    //private constructor -> constructor yang hanya bisa di akses dari dalam class itu sendiri. oleh karena itu hanya bisa bisa mengakses nya lewat static method.
    private constructor(name: string, taste: 'sweet' | 'sour' | 'salt' | 'spicy'){
        this.name = name;
        this.taste = taste;
    }

    //singleton nya. jika class Food ini sudah mempunyai instance/object, maka object yang sama yang akan di kembalikan.
    //namun jika belum ada object nya maka akan di create kan object baru.
    public static getInstance(){
        //pengecekan object dari class Food
        if(Food.instance){
           return this.instance 
        }
        //kalo object class Food ga ada maka akan di create kan object baru.
        this.instance = new Food('Ice Cream','sweet');
        return this.instance
    }

    public set setName(value: string) {
        this.name = value;
    }

    public set setTaste(value: 'sweet' | 'sour' | 'salt' | 'spicy') {
        this.taste = value;
    }

    public get getName(){
        return this.name;
    }

    public get getTaste(){
        return this.taste;
    }

}


//const food = new Food(); akan error karena constuctor dari class Food ini di set private.
//jadi inisilisasi object class Food ini hanya bisa menggunakan static method seperti di bawah.
const food = Food.getInstance();
const food2 = Food.getInstance();//var food2 ini akan mendapatkan object yang sama dengan var food karena menggunakan singleton.

console.log(food);
console.log(food2);

//interface -> mendeskripsikan struktur dari sebuah object class. jadi seperti kita membuat cetakan dari object ini akan terlihat seperti apa.
//interface ini bisa kita gunakan sebagai type
//interface ini tidak bisa di inisialisasi.
//pembuatan cetakan object atau interface
interface Person {
    name: string,
    age: number,
    greet(phrase: string): void;
}

//interface as type
let interfaceObject: Person;
//pendefisinian object nya.
interfaceObject = {
    name: 'Adi',
    age: 17,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
interfaceObject.greet('Hello');

let anotherInterfaceObject: Person;
//object yang berbeda namun struktur object nya sama. itu lah kegunaan dari interface.
anotherInterfaceObject = {
    name: 'Adi',
    age: 17,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name + ' and im ' + this.age + ' years old');
    }
}

//interface and class
interface Botol {
    ukuran: number,
    brand: string,
    printIklan(value: string): void;
    isiBotol(): void;
    minum(value: number): void;
}

//class bisa implement lebih dari 1 interface.
//setiap properties dan method yang ada di interface harus di implement di class tersebut. 
//nama method dan propertiesnya juga harus sama dengan interfacenya .
class Bocah implements Botol , Person{
    name: string;
    age: number;
    ukuran: number;
    brand: string;
    private threshold: number = 100;
    private air: number = 0;

    constructor(ukuran: number, brand: string,name: string,age: number) {
        this.ukuran = ukuran;
        this.brand = brand;
        this.name = name;
        this.age = age;
    }

    public greet(message: string){
        console.log(message + ' ' + this.name + ' and im ' + this.age + ' years old');
    }

    public printIklan() {
        console.log('Ayo Beli Botol dari Brand ' + this.brand)
    }

    public isiBotol() {
        if(this.air == 0){
            this.air = this.threshold
        }

        if(this.air > this.threshold){
            console.log('luber bang')
        }

        if(this.air < this.threshold){
            let diff = this.threshold - this.air
            this.air = this.air + diff
        }
    }

    public minum(value: number) {
        console.log('Habis minum air ' + value ) 
        this.air = this.air - value;
    }
}

//inheritance interface -> seperti inheritance namun 1 iterface bisa inherit lebih dari 1 interface.
interface Named {
    readonly name: string;
    output?: string; //penambahan tanda ? akan menandakan bahwa properties output ini optional di implement.
}

//jika di class nya ada properties yang di set optional (di berikan tanda ? ) maka di interfacenya juga harus di set optional.

interface AnotherNamed {
    age?: number;//di set optional
}

//inherit lebih dari 1 interface. jadi bisa di bilang kita merge interface (beberapa interface di gabungkan jadi 1 interface)
interface Greetable extends Named, AnotherNamed {
    greet(phrase: string): void;
}

//karena dia interface maka semua properties dan method nya wajib di implement
//harus di implement nya ke semua interface (Greetable,AnotherNamed,Named) nya termasuk parent2 interface nya (AnotherNamed,Named). 
class PersonBaru implements Greetable{
    name: string;//setelah di inisialisasi value nya maka tidak akan bisa di rubah karena readonly.
    age?: number;//di interface nya juga harus di set optional juga.

    //properties output tidak di implement di class ini karena memang di interfacenya di set optional, jadi boleh di implement atau tidak.

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}


//interface as type function
//cara kita membuat function type
type AddFn = (n: number,n2: number) => number;
//interface juga bisa kita gunakan sebagai alternatif sebagai type function seperti contoh di bawah.
interface AddFni {
    (n: number,n2: number): number;
}
let addTf: AddFn;
let addTf1: AddFni;
//hasilnya dengan menggunakan type.
addTf = (a: number, b: number): number => {
    return a + b;
}
//hasilnya akan sama seperti menggunakan type.
addTf1 = (a: number, b: number): number => {
    return a + b;
}