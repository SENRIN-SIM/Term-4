import { badMobile } from "./badMobile";
import { minivan } from "./minivan";
import { TucTuc } from "./tuctuc";

const badMobile1 = new badMobile(true, "1234TK", 100);

const minivan1 = new minivan(10, 10, "1234PPP", 100);

const tucTuc1 = new TucTuc(10, "1234KP", 100);

// console.log(badMobile1.getIsBadMobileHere());

// console.log(minivan1.getNumberOfPassenger());

// console.log(minivan1.getNumberOfLegages());

// console.log(minivan1['plateID']);

console.log(minivan1.setSpeedVihicle());

console.log(tucTuc1.setSpeedVihicle());


