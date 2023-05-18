// import { Interface } from "readline";

export {} 
import {Engine} from './Engine';
import {Auto} from './Engine';
import {Action} from './Engine'
 let message ="hi welcome to ts";
 console.log(message);
 let world ="hello"
 console.log(world);
 let singaram="sithapu"
 console.log(singaram);


//  test
let a;
a=1;
a="a";
let b:any=1;
b="hu";
let c:number=12.4
c=3456742453456785867564545678767564534343546576747645435637534354356463243546534536234567345673456345634563456345;
console.log(c);
let d:string="fjidajfca";
let e:boolean=true;
let f:null=null;
let g:undefined;
let arr=[1,2,3,4,5,6,7,8,9];
let arrstr:string[]=['roshin','selva','gokul','jagan']
let obj={
    name:"roshin"
};

function sum(a:number,b:number):number{
return a+b;
}
function chnageCase1(a){// if you not declare a datatype the integisence will no work properly
return a.toLowerCase();
}

function chnageCase2(a:string,b?:string):string{// b is optional
    if(b)
        return a.toLowerCase()+b;
    return a.toLowerCase();
    }
function chnageCase3(a:string,b:string="raj"):string{
    if(b)
        return a.toLowerCase()+b;
    return a.toLowerCase();
    }
console.log(chnageCase2("HI"));


 function add(point:{x:number,y:number}){
     return point.x+point.y;
 }
 let p={
     x:1,
     y:1
 }
 console.log(add(p));
 interface Point{
     x:number;
     y:number;
     z?:number;
 }
 function add2(point:Point){
    return point.x+point.y;
}
 
console.log(add2(p));





// map 1

function square(arr){
    return arr.map(e=>  e*e)
   }
  const  numbers=[1,2,4,6,8,9,16]
   console.log(square(numbers));
//    map2
function valueOfName(arr){
    return arr.map(e=>(e.name).toUpperCase())
}
var names=[{'name':'roshin'},{'name':'selva'},{'name':'gokul'},{'name':'jagan'}]
console.log(valueOfName(names))

class greeter{
    greeting :string;
    constructor(message:string){
        this.greeting=message;
    } 
    greet(){
        return "hello,"+this.greeting;
    }
}
class Car{
    engine:string;
    constructor(engine:string){
        // this.engine=engine;
        console.log(this.engine=engine);        
    }
}
class Bike{
    constructor(public motor:string){}
}
let objj =new Car("bence");


// this
// class vehicle{
//     // engine:string;
//     // constructor(engine:string){
//     //     this.engine=engine;
//     // }
//     constructor(public engine:string){}
//     start(){
//         return "started"+this.engine;
//     }
//     stop(){
//         return "started"+this.engine;    }
// }
class newCar {
    // constructor(private _engine:string) { }
    // get engine():=engine
    private _engine:string;
    constructor(engine:string){
        this.engine=engine;
        // console.log(this.engine);
        // console.log(this.);
        // console.log();
        }
    get engine():string{
        console.log("get");        
        return this._engine;
    }
    set engine(value:string){
        console.log("set");        
        if(value==undefined)throw 'Supply an engine';
        this._engine=value;
    }
    getMyEngine(){
        // console.log(this._engine);
        this._engine;        
    }
}
let objectForPrivate= new newCar("dual")
// inheritance
// class Engine.Engine {
    // horsePower=0;
    // engineModel='';
    // constructor(public horsePower:number,public engineModel:string ){}
// }
// class Auto {    
//     constructor( public engine:Engine) {
//         this.engine=engine;
//     }
// }
class Truck extends Auto {
    constructor(public fourByFour:boolean,engine:Engine) {
        super(engine);
        this.fourByFour=fourByFour;
        // console.log(this.engine.horsePower);
        // console.log(this.engine.engineModel); 
        console.log(this.engine);
               
    }    
}
let objForEngine=new Engine(200,"dual");
// console.log(objForEngine.horsePower);
let callTruck=new Truck(true,objForEngine)
// interface
// interface Action{
//     start(message:string);
//     stop(message:string);
// }
class interfaceCar implements Action {
    constructor(public engine :string) {
        // this.engine=engine;
        // console.log(objForInterface.start(" welcome"));        
    }
    start(message:string){        
        console.log(this.engine+message);        
    }
    stop(message: string) {
        console.log(this.engine+message);        
    }
}    
let objForInterface=new interfaceCar('v6')
objForInterface.start(" welcome")

// multiple interface
interface Action1{
    start(message:number);
    stop(message:string);
}
interface Action2 {
    start(message:number);
    secondLost(message:string);
}
class multipleInterfaceCar implements Action2 ,Action1{
    constructor(public engine :string) {
        // this.engine=engine;
        // console.log(objForInterface.start(" welcome"));
        
    }
    // start(message:string){
        
    //     console.log(this.engine+message+"start");
        
    // }
    stop(message: string) {
        console.log(this.engine+message+" stop");        
    }
    start(message:number){
        console.log(this.engine+message+" mid");        
    }
    secondLost(message:string){
        console.log(this.engine+message+" secondLost");        
    }
}    
let objFormultipleInterfaceCar=new multipleInterfaceCar('v6')
objFormultipleInterfaceCar.secondLost(" welcome")

// class Name {
//     constructor(public name:string,public department:number) {
//         this.name=name
//     }
// }
enum department{
    mech,cse,eee
}
console.log(department.eee);

// let s1=new Name("Roshin",2)


// genrics
let nameObject1={
    name:"Roshin",
    age:21
}
let nameObject2={
    name:"gokul",
    age:21
}
let myfun=<T extends object={name:number,age:number}>(obj:T)=>{return {...obj,greet:"hi"}}
let call=myfun(nameObject1)
console.log(call.name);

// console.log(myfun(nameObject1));
// console.log(myfun.name);

// console.log(myfun(nameObject2));
