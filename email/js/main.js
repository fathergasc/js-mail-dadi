const emailUser = prompt('Inserisci il tuo indirizzo email');

const emailList = ['quaglioniandrea@gmail.com', 'gretaluciani@gmail.com', 'alessandrocanovi@gmail.com', 'marcomura@gmail.com', 'luigizevola@gmail.com', 'nicolamaresu@gmail.com'];

let canAccess = false;

for (let i = 0; i <= emailList.length; i++) {

    if (emailList[i]  == emailUser) {
        canAccess = true
    
    }
}

if (canAccess = true) {
    alert('Sei autorizzato ad accedere al sito')   
} else {
    alert('Non sei autorizzato ad accedere al sito')
}