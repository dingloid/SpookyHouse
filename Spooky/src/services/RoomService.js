const constants = require('../consts/constants.js')

export class RoomService {
    
    constructor(){

    }

    generateStartingRoom(){        
        return {
            exits: Object.values(constants.Exits).filter(x => x == 'Right' || x == 'Down'),
            type: Object.values(constants.RoomType).filter(x => x == 'Normal')
        }
    }

    generateNextRoom(direction){
        var exitAmounts = Math.ceil(Math.random(3 -1));
        var newExits = [];
        newExits.push(Object.values(constants.Exits).filter(x => x == direction));
        for(var i = 0; i < exitAmounts; i++){    
            var randomExit = Math.ceil(Math.random(3));
            if(constants.Exits[randomExit].toString().toLowerCase() != direction){
                newExits.push(constants.Exits[randomExit].toString().toLowerCase());
            }                                
        }

        return {
            exits: newExits,
            type: Object.values(constants.RoomType).filter(x => x == 'Normal')
        }
    }

    validateMovement(room, direction){
        for(var i = 0; i < room.exits.length; i++){
            if(room.exits[i].toString().toLowerCase() == direction){
                return true;            
            }
        }
        return false;
    }

    /*
    File Naming Convention:
    File endings will be in order of Cardinal directions
    N-E-S-W
    0-0-0-0

    floor-0100 == East only
    */
    getImageFile(room){
        var suffixEnding = '../assets/floor-';
        var fileName = '';
        for(var i = 0; i < room.exits.length; i++){
            if(room.exits[i].toString().toLowerCase() == 'up'){
                fileName = suffixEnding.concat('1');
            } else{
                fileName = suffixEnding.concat('0');
            }

            if(room.exits[i].toString().toLowerCase() == 'right'){
                fileName = suffixEnding.concat('1');
            } else {
                fileName = suffixEnding.concat('0');
            }

            if(room.exits[i].toString().toLowerCase() == 'south'){
                fileName = suffixEnding.concat('1');
            } else {
                fileName = suffixEnding.concat('0');
            }

            if(room.exits[i].toString().toLowerCase() == 'left'){
                fileName = suffixEnding.concat('1');
            } else {
                fileName = suffixEnding.concat('0');
            }
        }

        fileName = suffixEnding.concat('.png');

        return fileName;
    }
}