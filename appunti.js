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