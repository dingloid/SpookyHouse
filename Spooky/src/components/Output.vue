<template>
    <div class="output">
        <RoomLayout/>
        <div class="textArea">
            {{msg}}
        </div>
        <div class="buttonRow">
            <button v-on:click="msg" type="button" class="btn btn-outline-dark" id="left">Left</button>
            <button type="button" class="btn btn-outline-dark" id="up">Up</button>
            <button type="button" class="btn btn-outline-dark" id="down">Down</button>
            <button type="button" class="btn btn-outline-dark" id="right">Right</button>
        </div>
    </div>
</template>

<script>
import RoomLayout from './RoomLayout.vue'
var msg = "you";

export default {
    name: 'Output',
    components: {
        RoomLayout
    },
    methods: {
        getMovement: function(event){
            var eventId = event.target.id;
            return "You moved " + eventId;
        } 
    },
    data() {
        return {
            msg: this.getMovement()
        }
    }
}
</script>

<style scoped>
</style>