export class Engine{
        constructor(public horsePower:number,public engineModel:string ){
            console.log("engine exported successfully");
            
        }
    
}
export class Auto {    
    constructor( public engine:Engine) {
        this.engine=engine;
    }
}

export interface Action{
    start(message:string);
    stop(message:string);
}