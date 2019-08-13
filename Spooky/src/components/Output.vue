<template>
    <div class="output">
        <div class="roomLayout">
            <img v-bind:src="require('../assets/' + imgUrl + '.png')"/>
        </div>
        <div id="text-area">
            <p>{{message}}</p>
        </div>
        <div class="buttonRow">
            <button v-on:click="getMovement" type="button" class="btn btn-outline-dark" id="left">Left</button>
            <button v-on:click="getMovement" type="button" class="btn btn-outline-dark" id="up">Up</button>
            <button v-on:click="getMovement" type="button" class="btn btn-outline-dark" id="down">Down</button>
            <button v-on:click="getMovement" type="button" class="btn btn-outline-dark" id="right">Right</button>
        </div>
    </div>
</template>

<script>
import {RoomService} from '../services/RoomService.js'

var roomService = new RoomService();
var msg = "Choose a direction to move";
var roomImg = "floor-0110";
var currentRoom = roomService.generateStartingRoom();

export default {
    name: 'Output',
    data() {
        return {
            message: msg,
            imgUrl: roomImg,
            room: currentRoom
        }
    },
    methods: {
        getMovement: function(event){            
            var eventId = event.target.id;
             
            if(roomService.validateMovement(this.room, eventId)){
                this.room = roomService.generateNextRoom(this.room, eventId); 
                var newImg = roomService.getImageFile(this.room);
                this.imgUrl = newImg; 
                this.message = "You moved " + eventId;              
            } else {
                this.message = "You cannot move " + eventId;
            }
        }
    }
}
</script>

<style scoped>
    #text-area{
        font: white;
        margin-top: 25px;
    }
</style>