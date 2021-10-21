const cart = [];

function memorize(i){
    cart.push(i);
    return cart;
}

const item1= 'spazzolino';
const item2= 'dentifricio';
const item3= 'carta igienica';

cart.push( item1, item2, item3);

const inputPrompt= prompt('Cosa vuoi aggiungere al carrello?');

//array.includes(item) se l'array include l'ggetto restituisce vero
if(cart.includes(inputPrompt)){
alert('Hai già aggiunto questa voce al carrello!');
}
else{
    memorize(inputPrompt);
    console.log(cart);
}    
