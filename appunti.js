/*
//Incrementiamo di un valore

for(let nomeVariabile = 0; nomeVariabile < 20; nomeVariabile++ )
{
    console.log(nomeVariabile);
}

console.log('fine ciclo')

//Incrementiamo di 5 valori alla volta

for(let nomeVariabile = 0; nomeVariabile < 20; nomeVariabile+= 5 )
{
    console.log(nomeVariabile);
}

console.log('fine ciclo')

//Cicliamo nomi 

let nomi = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];

for(let index = 0; index < 5; index++)

{
    console.log( nomi[index] );
}

//Proviamo ad usare lenght
//Lenght ci restituisce la quanità di elementi presenti nell'array=6

let nomi = ['Giorgio', 'francesca', 256, false, ['uno', ['pippo', 'pluto'], "tre"]];

for(let index = 0; index < nomi.lenght; index++)

{
    console.log( nomi[index] );
}

//In console avrò tutto l'array ciclato


//Ricordando che alla variabile index abbiamo assegnato il valore 0

let nomi = ['Giorgio', 'francesca', 256, false, ['uno', ['pippo', 'pluto'], "tre"]];

for(let index = 0; index < nomi.lenght; index++)

{
    console.log( index + 1 ) + ":" + nomi[index];
}



// for of - restituisce i nomi

let nomi  = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];
for ( let nome of nomi) {
    console.log ( nome );
}

// for in - restituisce gli indici
let nomi  = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];

for (let index in nomi){
    console.log(index);
}

// output 
//0 
//1
//2
//3 
//4
//5 



//Altro esempio

let nomi  = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];

for( let ilNostroindice in nomi) {

    console.log( nomi[ilNostroindice] );
}


//Supponimo che volessi stampare tutti i valori tranne il numero, mettiamo una condizione con if

let nomi  = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];

for( let ilNostroindice in nomi) {

    if( ilNostroindice != 2 ) //se si verifica la condizione per cui l'indice è diverso da due...

    console.log( nomi[ilNostroindice]  );
 } //...allora stampa questo!



 let nomi  = ['Giorgio', 'francesca', 256, false, 'pippo', 'pluto'];

for( let ilNostroindice in nomi) {

   let tipo = typeof nomi[ilNostroindice];
     if( tipo != 'string' ) //se gli elementi sono di tipo diverso da stringa

    console.log( nomi[ilNostroindice]  );
}



//Funzione

 function pippo(nome, cognome) {
     return  nome
 }

 let getName = pippo("ignazio", "stagnitta");

 console.log(getName);



//Funzione


 function pippo(nome, cognome) {

    let fullName = nome + " " + cognome;

    return  fullName;
}

let getName = pippo("Ignazio", "Stagnitta"); //Utilizzo la funzione richiamandola (pippo)

console.log(getName); 

console.log ( pippo("Michele", "amato") ); //Riutilizzo la stessa funzione richiamandola





//Altro esempio

function pippo(nome, cognome) {

    let fullName = nome + " " + cognome;

    console.log(fullName);
}

pippo("Ignazio", "Stagnitta" );






//Ricicliamo la funzione cambiando i parametri

function pippo(nome, cognome) {

    let fullName = nome + " " + cognome;

    console.log(fullName);
}

pippo("Ignazio", "Stagnitta" );
console.log('qui faccio altro');
pippo("Sandro", "Lo Piccolo");




//Se mi serve popolare una variabile e quindi avere al suo interno il risultato devo usare return





const nomeVariabile = "Pippo";
// Con cost io costruisco una Variabile soltanto in lettura

nomeVariabile = "Pluto"; 
//Se provo (cosi come fatto su) a cambiare il valore js non me lo permette, dandomi errore

//Regola assoluta per quanto riguarda le variabili di tipo primitivo

//Ma se io lavoro con un oggetto, quindi una variabile che non è di tipo primitivo...

const nomeVariabile = []

nomeVariabile = "Pluto"; // cosi non è possibile...

//Se lavoro all'interno dell'array mi è permesso...

nomeVariabile["Pluto"];

//oppure...

const nomeVariabile = pippo + pluto; ???

*/
const nomeVariabile = "";




let valore1 = "pippo";

valore1 = "pluto";

function processoQualcosa() {
    let valore1= "Teresa";
    valore1 = "Franco";
}

console.log(valore1);

//output: pluto

