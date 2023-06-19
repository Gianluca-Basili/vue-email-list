const {createApp} = Vue;

createApp({
    data(){
        return{
            arrayemail:[]
        }
    },
    mounted(){
        for(let i=1; 1<=10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>
            {

            })
        }
        
    }
}).mount('#app');