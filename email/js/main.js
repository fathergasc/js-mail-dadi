const emailUser = prompt('Inserisci il tuo indirizzo email');

const emailList = ['quaglioniandrea@gmail.com', 'gretaluciani@gmail.com', 'alessandrocanovi@gmail.com', 'marcomura@gmail.com', 'luigizevola@gmail.com', 'nicolamaresu@gmail.com'];

for (let i = 0; i <= emailList.length; i++) {

    if (emailList[i]  == emailUser) {
        alert('Sei autorizzato ad accedere al sito')
    
    }
}

alert("Non hai l'autorizzazzione necessaria per accedere al sito")