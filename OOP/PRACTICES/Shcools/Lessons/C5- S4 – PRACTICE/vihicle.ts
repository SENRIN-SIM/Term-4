export abstract class Vihicle {
    private plateID: string;
    private weght: number

    constructor(plateID: string, weght: number) {
        this.plateID = plateID;
        this.weght = weght;
    }

    abstract setSpeedVihicle(): number;
}