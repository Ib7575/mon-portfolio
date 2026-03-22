const section = document.querySelector(".section")
// section.innerHTML = "Bonjour"

const card = document.querySelector(".container");
const bouton = document.createElement("button");
const body = document.querySelector("body");

bouton.innerText = "Allumer";

bouton.addEventListener("click", () => {
  const estFerme = card.classList.contains("fermer");

  if (estFerme) {
    card.classList.remove("fermer");
    bouton.innerText = "Fermer";
  } else {
    card.classList.add("fermer");
    bouton.innerText = "Allumer";
  }
});

body.appendChild(bouton);

window.localStorage.getItem("paragraph")
paragraph = document.createElement("p")
paragraph.innerText = "Bonjour à tous"

body.appendChild(paragraph)
valeurParagraph = JSON.stringify(paragraph)
window.localStorage.setItem("paragraph", "valeurParagraph")
const remove = document.createElement("button")
remove.innerText = "Supprimer"
remove.addEventListener("click",()=>{
    window.localStorage.removeItem("paragraph")
})
body.appendChild(remove)

// function afficherBonjour(a){
//     return "Bonjour " + a;   
// }
// function afficherBonsoir(b){
//     return "Bonsoir " + b;   
// }
// function etudier(a, b, operation){
//     return operation(a, b)
// }
// console.log(etudier("Sissoko", "Ibrahima", afficherBonjour));
// console.log(etudier("SISSOKO", "Ibrahima", afficherBonsoir));

async function chargerDonnees(){
    const repon = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos = await repon.json()
    // console.log(todo);
    for (let todo of todos){
        // console.log(todo) 
        const donnee = document.createElement("p")
        donnee.innerText = todo.id
        body.appendChild(donnee)
    }
    
}
chargerDonnees()

const form = document.querySelectorAll("form")

for (let i = 0; i < form.length; i++){
    form[i].addEventListener("submit",(event)=>{
    event.preventDefault()
    const nom = event.target.querySelector("input[name='nom']").value;
    const prenom = event.target.querySelector("input[name='prenom']").value;
    const email = event.target.querySelector("input[name='email']").value;
    const commentaire = event.target.querySelector("textarea[name='comm']").value;

    let fiche = document.querySelector(".fiche")
    fiche.innerHTML = `<p>Nom: ${nom}</p>
                    <p>Prenom: ${prenom}</p>
                    <p>Email: ${email}</p>
                    <p>Commentaire: ${commentaire}</p>
 `
})
}


