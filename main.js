"use strict";
// import { Interface } from "readline";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./Engine");
var Engine_2 = require("./Engine");
var message = "hi welcome to ts";
console.log(message);
var world = "hello";
console.log(world);
var singaram = "sithapu";
console.log(singaram);
//  test
var a;
a = 1;
a = "a";
var b = 1;
b = "hu";
var c = 12.4;
c = 3456742453456785867564545678767564534343546576747645435637534354356463243546534536234567345673456345634563456345;
console.log(c);
var d = "fjidajfca";
var e = true;
var f = null;
var g;
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrstr = ['roshin', 'selva', 'gokul', 'jagan'];
var obj = {
    name: "roshin"
};
function sum(a, b) {
    return a + b;
}
function chnageCase1(a) {
    return a.toLowerCase();
}
function chnageCase2(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
function chnageCase3(a, b) {
    if (b === void 0) { b = "raj"; }
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
console.log(chnageCase2("HI"));
function add(point) {
    return point.x + point.y;
}
var p = {
    x: 1,
    y: 1
};
console.log(add(p));
function add2(point) {
    return point.x + point.y;
}
console.log(add2(p));
// map 1
function square(arr) {
    return arr.map(function (e) { return e * e; });
}
var numbers = [1, 2, 4, 6, 8, 9, 16];
console.log(square(numbers));
//    map2
function valueOfName(arr) {
    return arr.map(function (e) { return (e.name).toUpperCase(); });
}
var names = [{ 'name': 'roshin' }, { 'name': 'selva' }, { 'name': 'gokul' }, { 'name': 'jagan' }];
console.log(valueOfName(names));
var greeter = /** @class */ (function () {
    function greeter(message) {
        this.greeting = message;
    }
    greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return greeter;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        // this.engine=engine;
        console.log(this.engine = engine);
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(motor) {
        this.motor = motor;
    }
    return Bike;
}());
var objj = new Car("bence");
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
var newCar = /** @class */ (function () {
    function newCar(engine) {
        this.engine = engine;
        // console.log(this.engine);
        // console.log(this.);
        // console.log();
    }
    Object.defineProperty(newCar.prototype, "engine", {
        get: function () {
            console.log("get");
            return this._engine;
        },
        set: function (value) {
            console.log("set");
            if (value == undefined)
                throw 'Supply an engine';
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    newCar.prototype.getMyEngine = function () {
        // console.log(this._engine);
        this._engine;
    };
    return newCar;
}());
var objectForPrivate = new newCar("dual");
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
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(fourByFour, engine) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        _this.fourByFour = fourByFour;
        // console.log(this.engine.horsePower);
        // console.log(this.engine.engineModel); 
        console.log(_this.engine);
        return _this;
    }
    return Truck;
}(Engine_2.Auto));
var objForEngine = new Engine_1.Engine(200, "dual");
// console.log(objForEngine.horsePower);
var callTruck = new Truck(true, objForEngine);
// interface
// interface Action{
//     start(message:string);
//     stop(message:string);
// }
var interfaceCar = /** @class */ (function () {
    function interfaceCar(engine) {
        this.engine = engine;
        // this.engine=engine;
        // console.log(objForInterface.start(" welcome"));        
    }
    interfaceCar.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    interfaceCar.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return interfaceCar;
}());
var objForInterface = new interfaceCar('v6');
objForInterface.start(" welcome");
var multipleInterfaceCar = /** @class */ (function () {
    function multipleInterfaceCar(engine) {
        // this.engine=engine;
        // console.log(objForInterface.start(" welcome"));
        this.engine = engine;
    }
    // start(message:string){
    //     console.log(this.engine+message+"start");
    // }
    multipleInterfaceCar.prototype.stop = function (message) {
        console.log(this.engine + message + " stop");
    };
    multipleInterfaceCar.prototype.start = function (message) {
        console.log(this.engine + message + " mid");
    };
    multipleInterfaceCar.prototype.secondLost = function (message) {
        console.log(this.engine + message + " secondLost");
    };
    return multipleInterfaceCar;
}());
var objFormultipleInterfaceCar = new multipleInterfaceCar('v6');
objFormultipleInterfaceCar.secondLost(" welcome");
// class Name {
//     constructor(public name:string,public department:number) {
//         this.name=name
//     }
// }
var department;
(function (department) {
    department[department["mech"] = 0] = "mech";
    department[department["cse"] = 1] = "cse";
    department[department["eee"] = 2] = "eee";
})(department || (department = {}));
console.log(department.eee);
// let s1=new Name("Roshin",2)
// genrics
var nameObject1 = {
    name: "Roshin",
    age: 21
};
var nameObject2 = {
    name: "gokul",
    age: 21
};
var myfun = function (obj) { return __assign(__assign({}, obj), { greet: "hi" }); };
var call = myfun(nameObject1);
console.log(call.name);
// console.log(myfun(nameObject1));
// console.log(myfun.name);
// console.log(myfun(nameObject2));
