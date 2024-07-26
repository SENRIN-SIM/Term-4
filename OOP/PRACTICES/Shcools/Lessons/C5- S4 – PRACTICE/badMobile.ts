import { Vihicle } from "./vihicle";

export class badMobile extends Vihicle {
    isBadMobileHere: boolean;

    constructor(isBadMobile: boolean, plateID: string, weght: number) {
        super(plateID, weght);
        this.isBadMobileHere = isBadMobile;
    }
    getIsBadMobileHere(): string {
        if (this.isBadMobileHere === true){
            return 'Bad Mobile inside the MOBILE';
        }else{
            return 'Bad Mobile outside the MOBILE';
        }
    }

    setSpeedVihicle(): number{
        if (this.isBadMobileHere === true){
            return 500;
        }else{
            return 120;
        }
    }
}