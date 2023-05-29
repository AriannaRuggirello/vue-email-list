// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista

var { createApp } = Vue

createApp({
    data(){
        return{
            email: [],
        
        }   
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            function(response){
                console.log(response.data);
                this.email = response.data.response;
            })
    }  
}).mount('#app')