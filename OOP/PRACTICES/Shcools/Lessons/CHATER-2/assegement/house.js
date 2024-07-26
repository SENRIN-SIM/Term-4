var house = /** @class */ (function () {
    function house(owner, numberHouse) {
        this.owner = owner;
        this.numberHouse = numberHouse;
        this.rooms = [];
    }
    house.prototype.setRooms = function (roomName) {
    };
    return house;
}());
var rooms = /** @class */ (function () {
    function rooms(owner, roomNumber) {
        this.owner = owner;
        this.roomNumber = roomNumber;
        this.doors = [];
    }
    rooms.prototype.setDoor = function (doorData) {
        var room = new doors(doorData);
        this.doors.push(room);
    };
    return rooms;
}());
var doors = /** @class */ (function () {
    function doors(kind) {
        this.kind = kind;
    }
    return doors;
}());
var room = new rooms("Senrin", 2);
room.setDoor("wall");
console.log(room);
