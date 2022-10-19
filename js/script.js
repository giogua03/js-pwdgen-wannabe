let nome = prompt('Quale il tuo nome?');
document.getElementById('nome').innerHTML = nome;
console.log(nome)
let cognome = prompt('Quale il tuo cognome?');
document.getElementById('cognome').innerHTML = cognome;
console.log(cognome)
let colore= prompt('Quale il tuo colore preferito?');
document.getElementById('colore').innerHTML = colore;
console.log(colore)
let totale = document.getElementById('totale').innerHTML = nome + cognome + colore;