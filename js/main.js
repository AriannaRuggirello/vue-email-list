// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista

var { createApp } = Vue

createApp({
    data(){
        return{
            emails: [''],
        }   
    },
    mounted(){
        for (let i = 1; i < 10; i++) {
            let email = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                response => {
                    console.log(response.data.response);
                    return response.data.response;
                })
            this.emails.push(email);
        } 
    }  
}).mount('#app')