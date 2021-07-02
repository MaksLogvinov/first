
const flat = {
    rooms: new Object(), // {}
    startRoom: null,
  
    doors: new Array(), // []
  
    checkIfCanGo(room1, room2) {
      const doors = this.doors;
      for (let i = 0; i < doors.length; ) {
        const door = doors[i]
        if (door.room1 === room1 && door.room2 === room2) {
          return true
        }
        if (door.room2 === room1 && door.room1 === room2) {
          return true
        }
        i++
      }
      return false;
    }
  }
  
  function createRoom(name) {
    flat.rooms[name] = {
      name,
      toString() {
        return this.name
      }
    }
    return flat[name]
  }
  
  function createDoor(room1, room2) {
    if (!room1) {
      throw new Error('room1 is not defined')
    }
    if (!room2) {
      throw new Error('room2 is not defined')
    }
    const door = {
      room1,
      room2
    }
  
    flat.doors.push(door)
  
    return door
  }
  
  createRoom('lobby')
  createRoom('hall')
  createRoom('restroom')
  createRoom('bathroom')
  createRoom('bedroom')
  createRoom('kidsroom')
  createRoom('kitchen')
  createRoom('balcony')
  flat.startRoom = flat.rooms.lobby
  
  createDoor(flat.rooms.lobby, flat.rooms.hall)
  createDoor(flat.rooms.lobby, flat.rooms.restroom)
  createDoor(flat.rooms.hall, flat.rooms.bedroom)
  createDoor(flat.rooms.hall, flat.rooms.kidsroom)
  createDoor(flat.rooms.hall, flat.rooms.bathroom)
  createDoor(flat.rooms.hall, flat.rooms.kitchen)
  createDoor(flat.rooms.kitchen, flat.rooms.balcony)
  
  function createNavigator(flat) {
    const navigator = {
      room: flat.startRoom,
      gotoRoom(room) {
        if (navigator.checkIfCanGo(room)) {
          console.log(`Moving from ${navigator.room} to ${room}`)
          navigator.room = room
        } else {
          console.warn(`Can't go from ${navigator.room} to ${room}. Still in the ${navigator.room}`)
        }
      },
      checkIfCanGo(room) {
        return flat.checkIfCanGo(navigator.room, room)
      }
    }
    return navigator
  }
  const cat = createNavigator(flat)
  
  cat.gotoRoom(flat.rooms.hall)
  cat.gotoRoom(flat.rooms.kitchen)
  cat.gotoRoom(flat.rooms.hall)
  cat.gotoRoom(flat.rooms.kidsroom)
  cat.gotoRoom(flat.rooms.restroom)
  