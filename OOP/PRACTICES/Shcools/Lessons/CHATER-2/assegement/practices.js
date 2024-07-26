var House = /** @class */ (function () {
    function House(numberDoor, owner) {
        this.numberDoor = numberDoor;
        this.owner = owner;
        this.trees = [];
    }
    // Method to set multiple trees to the house
    House.prototype.setTrees = function (treeSizes) {
        var _this = this;
        treeSizes.forEach(function (size) {
            var tree = new Trees(size);
            _this.trees.push(tree);
        });
    };
    return House;
}());
var Trees = /** @class */ (function () {
    function Trees(size) {
        this.size = size;
    }
    return Trees;
}());
// Create a House object
var myHouse = new House(3, "John's House");
// Call the setTrees method to set three trees to the house
myHouse.setTrees([5, 8, 10]);
// Log the details of the trees
myHouse.trees.forEach(function (tree, index) {
    console.log("Tree ".concat(index + 1, ": Size - ").concat(tree.size));
});
console.log(myHouse);
