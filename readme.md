Problema : Griglia Campo Minato

1 - Creare in html un div contenitore e un pulsante fuori ;
2 - Creare in js una variabile che andra a prendere il pulsante .
3 - Creare un azione da fare solo quando si clicca 
4 - Al interno del azione creare una variabile con la quale prendiamo il div contenitore 
5 - Creiamo un ciclo for che parte da 0 e arriva a 100
 	5.1 -Al interno facciamo una variabile con la quale creaiamo un elemento tramite una funzione che sara il nostro quadrato da stilizzare in css 
	5.2 - Lo appendiamo nel nostro div contenitore 
6 - Creaiamo la funzione da dare alla variabile , al interno :
	6.1 - Creaiamo un div 
	6.2 - Li assegnamo una classe
	6.3 - Return
7 - Sistemiamo css dando stile alle nostre classi.
8 - Creaiamo un addevenlistener con dentro this che agisce al click cambiando il colore del quadrato .

Problema : Creare una select per far scegliere al utente la difficolta 

1 - Creo nel html la select ;
2 - Creo un collegamento con il valore inserito dal utente
3 - Creo un if else 
	3.1 - Se sceglie difficolta 100 uscira la griglia da 100
	3.2 - Se sceglie difficolta 81 uscira la griglia da 81
	3.3 - Se sceglie difficolta 49 uscira la griglia da 49


Problema : Creare 16 bombe casuali 

1 - Creare un array vuoto 
2 - Creare una funzione con la quale generiamo 16 numeri casuali da inserire nella nostra array vuota 
	2.1 - Il numero random dovra partire da uno fino al livello selezionato dal utente 
3 - Assicurarsi che il numero non si ripeta nel array 
4 - Se cliccando su un numero , questo numero e uguale ad un numero del array delle bombe , dovra diventare rosso e finire la partita
	4.1 - Se si clicca su una bomba facciamo uscire i  punti e dichiariamo partita finita .
	4.2 - Se invece si evitano le bombe le caselle continuano a colorarsi di blu fino alla fine e facciamo uscire l'avviso hai vinto .