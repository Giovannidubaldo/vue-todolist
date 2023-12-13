// Inizializzo e definisco la struttura Vue
const { createApp } = Vue;

createApp({
    data(){
        return{
            todo_list: [
                {
                    text: 'Iron Man',
                    done: false
                },
                {
                    text: 'Doctor Strange',
                    done: false
                },
                {
                    text: 'Thor: Ragnarok',
                    done: false
                },
                {
                    text: 'Captain America: Civil War',
                    done: false
                },
                {
                    text: 'Spider-Man: No Way Home',
                    done: false
                },
                {
                    text: 'Guardiani della Galassia',
                    done: false
                },
                {
                    text: 'Avengers: Endgame',
                    done: false
                },
            ]
        }
    },
    methods: {
        
    },
}).mount('#app')