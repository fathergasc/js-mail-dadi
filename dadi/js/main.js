document.getElementById('btn').addEventListener('click',
    function () {
        const numeroComputer = Math.floor(Math.random() * 6) + 1;
        console.log(typeof numeroComputer)
        console.log(numeroComputer)
        const numeroUtente = Math.floor(Math.random() * 6) + 1;
        console.log(typeof numeroUtente)
        console.log(numeroUtente)

        if (numeroComputer == numeroUtente) {
            alert ('Hai tirato ' + numeroUtente + ', anche il computer ha tirato ' + numeroComputer + '. Pareggio!')
        } else if (numeroUtente < numeroComputer) {
            alert ('Hai tirato ' + numeroUtente + ', mentre il computer ha tirato ' + numeroComputer + '. Hai perso!')
        } else if (numeroUtente > numeroComputer) {
            alert ('Hai tirato ' + numeroUtente + ', mentre il computer ha tirato ' + numeroComputer + '. Hai vinto!')
        }
    }
)




