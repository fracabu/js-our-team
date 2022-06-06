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
        nome: "Wayne Barnett",
        ruolo: "Founder CEO",
        foto:"img/wayne-barnett-founder-ceo.jpg",

    },

    { 
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto:"img/angela-caroll-chief-editor.jpg",

    },


    { 
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "img/walter-gordon-office-manager.jpg",

    },

    { 
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "img/angela-lopez-social-media-manager.jpg",

    },

    { 
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "img/scott-estrada-developer.jpg",

    },

    { 
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg",

    },
    
];
console.log(elencoMembriTeam);


//Stampo in console l'array di oggetti creati
/*
for (let key in elencoMembriTeam) {
    let card = elencoMembriTeam[key];
    console.log(card);
    console.log(card.nome);
}
*/
for (let i = 0; i < elencoMembriTeam.length; i++){
    const teamMember = elencoMembriTeam[i]; // teamMember = oggetto con chiavi nome ruolo e img
    //stampo nome e ruolo di ogni membro
    console.log(`Nome: ${teamMember.nome} - Ruolo: ${teamMember.ruolo}`);
}
