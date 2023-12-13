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
                    done: true
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
                    done: true
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