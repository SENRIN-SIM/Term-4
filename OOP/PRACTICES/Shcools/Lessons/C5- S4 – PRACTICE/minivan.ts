import { Vihicle } from "./vihicle";

export class minivan extends Vihicle{
    numberOfCustomers: number;
    numberOfLegages: number;

    constructor(numberOfCustomers: number, numberOfLegages: number, plateID: string, weght: number){
        super(plateID, weght);
        this.numberOfCustomers = numberOfCustomers;
        this.numberOfLegages = numberOfLegages;
    }

    getNumberOfPassenger(): number{
        return this.numberOfCustomers;
    }
    getNumberOfLegages(): number{
        return this.numberOfLegages;
    }

    setSpeedVihicle(): number {
        let speed = 130
        if (this.numberOfCustomers != 0){
            speed -= 10;
        }
        if (this.numberOfLegages != 0) {
            speed -= 5;
        }
        return speed;
    }
}    