import { Vihicle } from "./vihicle";

export class TucTuc extends Vihicle {
    numberOfCustomer: number;
    constructor(numberOfCustomer: number, plateID: string, weght: number){
        super(plateID, weght);
        this.numberOfCustomer = numberOfCustomer;
    }

    public getNumberOfCustomer(): number {
        return this.numberOfCustomer;
    }

    setSpeedVihicle():number {
        let speed = 130
        if (this.numberOfCustomer == 0) {
            return speed;
        }else{
            return speed - 5;
        }
    }
}