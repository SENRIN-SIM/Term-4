class House {
    numberDoor: number;
    owner: string;
    trees: Trees[];

    constructor(numberDoor: number, owner: string){
        this.numberDoor = numberDoor;
        this.owner = owner;
        this.trees = [];
    }

    // Method to set multiple trees to the house
    setTrees(treeSizes: number[]): void {
        treeSizes.forEach(size => {
            const tree = new Trees(size);
            this.trees.push(tree);
        });
    }
}

class Trees {
    size: number;
    constructor(size: number){
        this.size = size;
    }
}

// Create a House object
const myHouse = new House(3, "John's House");

// Call the setTrees method to set three trees to the house
myHouse.setTrees([5, 8, 10]);

// Log the details of the trees
myHouse.trees.forEach((tree, index) => {
    console.log(`Tree ${index + 1}: Size - ${tree.size}`);
});

console.log(myHouse)