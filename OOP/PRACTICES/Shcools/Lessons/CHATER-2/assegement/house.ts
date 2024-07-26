class house {
    owner:string;
    numberHouse:number;
    rooms: rooms[];

    constructor(owner:string,numberHouse:number){
        this.owner = owner;
        this.numberHouse = numberHouse;
        this.rooms = []; 
    }

    setRooms(roomData: object):void{
        // roomData.forEach(data=>{
        //     const {}

        // })
        
    }
}
class rooms {
    owner:string;
    roomNumber: number;
    doors:doors[];
    constructor(owner:string,roomNumber: number){
        this.owner = owner;
        this.roomNumber = roomNumber;
        this.doors = []; 
    }

    setDoor(doorData:string):void{
        const room = new doors(doorData);
        this.doors.push(room)
    }
    
}
class doors {
    kind:string;
    constructor(kind:string){
        this.kind = kind;
    }
}

const room = new rooms("Senrin", 2)

room.setDoor("wall")

console.log(room)