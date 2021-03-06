/* 
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.*/

const app = new Vue({

    el: '#app',
    data:{

        user:{
            name: 'Nome utente',
            avatar: '_io'
          },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        utenteAttivo:0,
        strMes: '',
        now:dayjs().format('DD/MM/YYYY HH:mm:ss')
        




    },
    methods:{
        sendMessage(){
            this.contacts[this.utenteAttivo].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.strMes,
                status: 'sent'
            });
            this.strMes = '';
            setTimeout(()=>{
                this.contacts[this.utenteAttivo].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'Ok',
                    status: 'received'
                });  
            },1000)
            
        },

        lastAccess(index){
            let contactMess  =  this.contacts[index].messages;
            return contactMess[contactMess.length-1].date;
          },

          lastMessage(index){
            let contactMess  =  this.contacts[index].messages;
            if(contactMess[contactMess.length-1].text.length > 20){

              let splicedMess = contactMess[contactMess.length-1].text.slice(0, 20) + "...";
              return splicedMess;
            }
            
            return contactMess[contactMess.length-1].text;
          }
    },
    mounted(){

    
    }
     

});