/*

Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun
membro del team un elemento html che conterrà i suoi dati.

*/

// definire un array di oggetti che rappresentano i membri del team

const elencoMembriTeam = [
    { 
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:"img",

    },


    { 
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img",

    },

    { 
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img",

    },

    { 
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img",

    },

    { 
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img",

    },
    
];
console.log(elencoMembriTeam);


//Stampo in console l'array di oggetti creati

for (let key in elencoMembriTeam) {
    let card = elencoMembriTeam[key];
    console.log(card);
    console.log(card.nome);
}

