// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione:
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati:
// - abbiamo calpestato una bomba
// - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




let buttonGame = document.getElementById('button');
let mainContentEl = document.querySelector('main div.main-content');



// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

buttonGame.addEventListener('click', function () {

    mainContentEl.innerHTML = '';

    function getNewSquare(){
        const newSquareElement = document.createElement('article');
        newSquareElement.classList.add('item-square');
        return newSquareElement;

    }
    
    
    
    
    
    
    for (let i = 1; i <= 100; i++){
        const currentSquare = getNewSquare();


        

        


        // Quando l'utente clicca su ogni cella,
        //  la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.    
    
        currentSquare.addEventListener('click', function (){
            currentSquare.classList.toggle('clicked');
            console.log(squareContent);
        });
        mainContentEl.appendChild(currentSquare);


        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

        let bomb = [];                                               // definisco l'array
        let sixteenBomb = 16;                                        // definisco quanto è lungo l'array bomb

        while (bomb.length < sixteenBomb){                           // finchè non è lungo abbastanza

            let newBomb = Math.floor(Math.random() * 16) + 1;        // genero un nuovo numero random

            if (!bomb.includes(newBomb)){                            // se il mio array non contiene il numero random della bomba
                
                bomb.push(newBomb)                                   // lo aggiungo all'array bomb
            }
            break;
        }

        console.log(bomb);


        // Ogni cella ha un numero progressivo, da 1 a 100.

        const squareContent = i;
    
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
    }   
});




