/* 
Viene fornito un file js in cui è definito un array di oggetti che rappresentano 
i membri del team. Ogni membro ha le informazioni necessarie per stampare le relative 
informazioni: Nome, Ruolo e Foto.
*/

// Milestone 1
/* stampare su console le informazioni di nome, ruolo e la stringa della foto */

const team = [
    // 1°Persona - Founder
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    // 2°Persona - Chief Editor
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    // 3°Persona - Office Manager
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    // 4°Persona - Social Media Manager
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    // 5°Persona - Developer
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    // 6°Persona - Graphic Designer
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];
// Verifico in console il risultato e la forma dell'object
console.log(typeof team);

// Avvio il ciclo for per tutte le informazioni

for (let i = 0; i < team.length; i++) {
    // Cerco di suddividere l'array sopra disarticolando il
    // team nel ciclo for, a ogni i dovrà rilasciare
    // un articolo singleTeamObj
    const singleTeam = team[i]
    // Ora ricerco per il nome
    console.log(singleTeam.name);
    // Ora ricerco per il ruolo
    console.log(singleTeam.role);
    // Ora ricerco per immagine
    console.log(singleTeam.image);
    // Spaziatura tra nomi/ruoli/image
    console.log('_______');
}
