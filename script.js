// Fonction déclenchée lors du clic sur le bouton "ajouter une tâche"
function displayToList(event){

    // Empêche le rechargement de la page lors de la soumission du formulaire
    event.preventDefault();

    // Récupère l'élément input où l'utilisateur écrit la tâche
    const input = document.getElementById('task-input');
    // Récupère le texte entré dans l'input, en supprimant les espaces vides au début et à la fin
    const textTask = input.value.trim();
    // Si le texte est vide, arrête l'exécution de la fonction
    if (textTask === ''){
        return;
    }
    // Récupère l'élément ul qui contient la liste des tâches
    const ul = document.getElementById('display-todo');
    // Crée un nouvel élément li (ligne pour la tâche)
    const li = document.createElement('li');
    // Insère le texte de la tâche et les boutons Modifier et Supprimer dans l'élément li
    li.innerHTML = `
      ${textTask}
      <button onclick="editTask(event)">Modifier</button>
      <button onclick="deleteTask(event)">Supprimer</button>
    `;
    // Ajoute le li à l'élément ul (ajoute la tâche à la liste)
    ul.appendChild(li);
    // Réinitialise l'input pour le vider après l'ajout de la tâche
    input.value = '';
}

// Fonction appelée lorsqu'on clique sur le bouton "Supprimer"
function deleteTask(event){
    // Récupère l'élément li contenant le bouton cliqué
    const li = event.target.parentElement;
    // Supprime l'élément li de la liste
    li.remove();
}

// Fonction appelée lorsqu'on clique sur le bouton "Modifier"
function editTask(event){
    // Récupère l'élément li contenant le bouton cliqué
    const li = event.target.parentElement;
    // Récupère le texte actuel de la tâche
    const currentText = li.firstChild.textContent.trim();
    // Affiche une boîte de dialogue pour modifier le texte de la tâche
    const newText = prompt("Modifier la tâche :", currentText);
    // Si le texte saisi n'est pas vide, met à jour le texte de la tâche
    if (newText && newText.trim() !== "") {
            li.firstChild.textContent = newText;
    }
}
