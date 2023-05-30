"use strict";
let start = document.querySelector(`.start_100`);//prendiamo il pulsante

//Creiamo una function per creare un div con dentro una classe che cambia in base alla scelta del utente
function createSquareElement(livello) {
    let square = document.createElement('div');
    
    if (livello === 'Easy') {
        square.classList.add('square');
    } else if (livello === 'Medium') {
        square.classList.add('square_9');
    } else if (livello === 'Hard') {
        square.classList.add('square_7');
    }

    return square;
  }
//Funzione per generare numero random 
function randomNumberBombe(min, max){
    return Math.floor(Math.random()*(max - min +1)+min)
}

//Mettiamo l'inizio del pulsante 
start.addEventListener(`click`, function(){
   //Creiamo level per determinare il numero di quadrati in base alla scelta del utente 
    let level = document.getElementById(`level`).value;
        if(level === `Easy`){
             level = 100
            }else if(level === `Medium`){
             level = 81
            }else if(level === `Hard`){
              level = 49
            }
        //Creiamo un array di 16 numeri random che non si ripetano
            let bombe = [];
            console.log(bombe)
            while (bombe.length < 16) {
              let bombNumber = randomNumberBombe(1, level);
              if (!bombe.includes(bombNumber)) {
                bombe.push(bombNumber);
              }
            }

//Prendiamo il container del main e li creiamo una classe in modo che si apra insieme al pulsante
    let container = document.querySelector(`.container_main`)
    container.classList.add(`container`)
//Svuotiamo il container ad ogni click per inserire i nuovi dati della nuova difficoltà
    container.innerHTML = '';
    let gameOver = false
    let winnerClick = 0 
    document.querySelector(`.verdetto`).innerText= ``
//Creiamo il ciclo che si comportera di conseguenza alle scelte precedenti 
    for (let i=0; i<level; i++){
        let square = createSquareElement(document.getElementById('level').value);
        square.innerText = i + 1;
//Mettiamo in pagina i risultati 
        container.append(square)
//Facciamo uscire nella console il quadrato con il numero cliccato dal utente e cambiamo il background del quadrato (senza poi ritornare al colore iniziale ricliccando) 
    square.addEventListener(`click`, function(){

       if(gameOver === false && !square.clicked) 
        if(!bombe.includes(square.innerText = i + 1)){
          square.clicked = true;
        this.classList.add(`clicked`)
        winnerClick++;
        if(winnerClick === level - 16){
            gameOver=true
            document.querySelector(`.verdetto`).innerText= `Bravo hai compiuto l'impossibile`
        }
        }else{
            gameOver= true
            this.classList.add(`bomb`)
            document.querySelector(`.verdetto`).innerText= `Hai perso . I tuoi punti sono : ${winnerClick}`

            let bombs = document.querySelectorAll(`.square, .square_9, .square_7`);
            bombs.forEach(bomb => {
              if (bombe.includes(parseInt(bomb.innerText))) {
                bomb.classList.add(`bomb`);
              }
        
      });
        }
        console.log(this.innerText)

    })
    }

})