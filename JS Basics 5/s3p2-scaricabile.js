// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


//esercizio 7

function testoH1() {
   let titolo =  document.getElementsByTagName("h1")[0]
    titolo.innerText = "Ciao Simone"
    return titolo
}

testoH1()

//esercizio 8

function bodyColor() {
    let corpo = document.getElementsByTagName("body")[0]
    corpo.style.backgroundColor = "antiquewhite"
    return corpo
}

bodyColor()

//esercizio 9

function footerAddress() {
    let indirizzo = document.querySelector("footer h3")
    indirizzo.innerText = "via di meglio, 67, 13298, kakkatu"
    return indirizzo
}

footerAddress()

// esercizio 10

function links() {
    let link = document.getElementsByTagName("a")
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add("BellaSimo")
    }
    return link
}

links()

//esercizio 11

    function imageChange(compare) {
     let immagine = document.getElementsByTagName("img")
     for (let i = 0; i < immagine.length; i++) {
         if (compare) {
             immagine[i].classList.add("immagine")
         } else {
             immagine[i].classList.remove("immagine")
         }
     }
     return immagine
 }
 // metti false se vuoi vedere le immagini altrimenti sono invisibili
    imageChange(false)

//esercizio 12

 function coloreRandom() {
     let prezzo = document.getElementsByTagName("span")
     for (let i = 0; i < prezzo.length; i++) {
         let r = Math.floor(Math.random() * 256);
         let g = Math.floor(Math.random() * 256);
         let b = Math.floor(Math.random() * 256);
         let colore = "rgb(" + r + ", " + g + ", " + b + ")";
         prezzo[i].style.color = colore
     }
     return prezzo
 }

 coloreRandom()
// ogni volta che ricarichi la pagina ci sono dei colori diversi