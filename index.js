let room = {
    roomHeight: 3,
    roomLenght: 5,
    roomWidth: 5,
    doorHeight: 2,
    doorWidth: 1,

    floorSquare() {
        return this.roomLenght * this.roomWidth
    },
    
    floorPerimeter() {
        return 2 * (this.roomLenght + this.roomWidth) - this.doorWidth 
    },

    ceilingPerimeter() {
        return 2 * (this.roomLenght + this.roomWidth)
    },

    wallSquare() {
        return (room.ceilingPerimeter() * this.roomHeight  - this.doorHeight * this.doorWidth)
    },
    
};

