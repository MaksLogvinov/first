 
const flate = {
    room1: {
        name: 'kitchen',
        dr1: 1,
        dr2: 1,
        dr3: 1,
        dr4: null,
        dr5: null,
        dr6: null,
    },
 
    room2: {
        name: 'hallway',
        dr1: 1,
        dr2: 1,
        dr3: 1,
        dr4: 1,
        dr5: 1,
        dr6: 1,
    },
 
    room3: {
        name: 'restroom',
        dr1: null,
        dr2: null,
        dr3: null,
        dr4: 1,
        dr5: null,
        dr6: null,
    },
 
    room4: {
        name: 'shower',
        dr1: null,
        dr2: null,
        dr3: null,
        dr4: null,
        dr5: 1,
        dr6: null,
    },
 
    room5: {
        name: 'bedroom',
        dr1: null,
        dr2: null,
        dr3: null,
        dr4: null,
        dr5: null,
        dr6: 1,
    },
 
    room6: {
        name: 'hall',
        dr1: 1,
        dr2: 1,
        dr3: 1,
        dr4: null,
        dr5: null,
        dr6: null,
    },
};
 
const kitchen = flate.room1
const hallway = flate.room2
const restroom = flate.room3
const shower = flate.room4
const bedroom = flate.room5
const hall = flate.room6
 
let startLocation = flate.room2
 
function roomLocation (expectedLocation) {
 
let myLocation = null
 
    if ((startLocation.dr1 == expectedLocation.dr1 && startLocation.dr1 != null) || 
        (startLocation.dr2 == expectedLocation.dr2 && startLocation.dr2 != null) ||
        (startLocation.dr3 == expectedLocation.dr3 && startLocation.dr3 != null) ||
        (startLocation.dr4 == expectedLocation.dr4 && startLocation.dr4 != null) || 
        (startLocation.dr5 == expectedLocation.dr5 && startLocation.dr5 != null) ||
        (startLocation.dr6 == expectedLocation.dr6 && startLocation.dr6 != null)   ) {
            myLocation = expectedLocation
            startLocation = myLocation 
            return 'Cool! You walked into the ' + myLocation.name
        }
    
    else {myLocation = startLocation 
        return 'Sorry! You still stay in the ' + myLocation.name};
    };
