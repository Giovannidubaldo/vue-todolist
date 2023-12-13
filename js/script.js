// Inizializzo e definisco la struttura Vue
const { createApp } = Vue;

createApp({
    data(){
        return{
            add_film: '',
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
        removeFilm(index){
            this.todo_list.splice(index,1);
        },
        addNewFilm(){
            this.todo_list.push({
                text : this.add_film,
                done : false
            })
            
            this.add_film = '';
        }
    },
}).mount('#app')