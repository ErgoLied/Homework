function printText(x:string){
    console.log(x);
    return x;
}
printText('mew');

function printNum(x:number):number{
    console.log(x);
    return x;
}
printNum(34);

interface IUser{
    name: string;
    age: number;
    msg?(a:string):void
}
function createObj(x: IUser){
    console.log(x);
    return x;
}
createObj({
    name: 'Asdf', age: 35, msg: (a: string) => {
        return 'Hi';
    }
});

class X implements IUser{
    age: number;
    name: string;
    propX: string;
}

const x = new X;
const iUsers : IUser[] = [x, {name: 'Qwert', age: 34}];

class Usr{
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
function createUsr(a: Usr){
    console.log(a);
}
const user = new Usr('Zxcvb', 34);
user.age = 666;
createUsr(user);