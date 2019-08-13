import { PassThrough } from 'stream';

const constants = require('../consts/constants.js')

export class RoomService {
    
    constructor(){

    }

    //Starting Room will always be static in terms of directions available.
    generateStartingRoom(){        
        return {
            exits: Object.values(constants.Exits).filter(x => x == 'Right' || x == 'Down'),
            type: Object.values(constants.RoomType).filter(x => x == 'Normal')
        }
    }

    generateSpookyHouse(){
        var spookyHouse = new Array(10);

        //Initial Creation of 2D array
        for (var i = 0; i < spookyHouse.length; i++){
            spookyHouse = new Array(10);
        }

        //Population of 2D Array
        for(var i = 0; i < 10; i++){
            for(var j = 0; j < 10; i++){
                if(i == 0 && j == 0){
                    spookyHouse[i][j] = this.generateStartingRoom();
                } else {
                    if(spookyHouse[i - 1][j - 1].type.toString().toLowerCase() == 'Empty'){
                        continue;
                    } else {
                        spookyHouse[i][j] = this.generateNextRoom(this.spookyHouse[i -1][j -1]);
                    }                    
                }
            }
        }
    }

    generateNextRoom(room){
        var exitAmounts = Math.ceil(Math.random(2));
        var newExits = [];
        newExits.push(Object.values(constants.Exits).filter(x => x == direction));
        for(var i = 0; i < exitAmounts; i++){    
            var randomExit = Math.ceil(Math.random(3));

            newExits.push(constants.Exits[randomExit].toString().toLowerCase());                                   
        }

        return {
            exits: newExits,
            type: Object.values(constants.RoomType).filter(x => x == 'Normal')
        }
    }

    // generateNextRoom(direction){
    //     var exitAmounts = Math.ceil(Math.random(3 -1));
    //     var newExits = [];
    //     newExits.push(Object.values(constants.Exits).filter(x => x == direction));
    //     for(var i = 0; i < exitAmounts; i++){    
    //         var randomExit = Math.ceil(Math.random(3));
    //         if(constants.Exits[randomExit].toString().toLowerCase() != direction){
    //             newExits.push(constants.Exits[randomExit].toString().toLowerCase());
    //         }                                
    //     }

    //     return {
    //         exits: newExits,
    //         type: Object.values(constants.RoomType).filter(x => x == 'Normal')
    //     }
    // }

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
        
        var fileName = 'floor-';
        for(var i = 0; i < 4; i++){
            if(room.exits[i] != undefined){
                switch(room.exits[i].toString().toLowerCase()){
                    case 'up':
                        fileName += '1';
                        break;
                    case 'right':
                        fileName += '1';
                        break;
                    case 'down':
                        fileName += '1';
                        break;
                    case 'left':
                        fileName += '1';
                        break;
                    default:  
                        fileName += '0';                      
                        break;
                }     
            } else {
                fileName += '0';
                continue;
            }               
        }

        return fileName;
    }
}