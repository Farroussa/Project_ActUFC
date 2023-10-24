//const Vue = require('vue/dist/vue.js');

const app = Vue.createApp({ 
    el: '#vue-app',
    data() {
        return {
            health: 100,
            ended: false
        }
    },
    methods: { 
        punch: function(){ 
            this.health -= 10;
            if (this.health <= 0){ 
                this.ended = true;
            }
        },
        restart: function(){ 
            this.health = 100;
            this.ended = false;
        },
        updateHealth: function(){
            return this.health +'%';
        } 
    }
});

