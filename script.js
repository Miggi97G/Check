//Notizen global speichern
//Notizen Hinzufügen
//Notizen löschen

//Erledigt Button
//Erledigt Bereich
//Notizen verschiebn (Drag and Drop)
//Notizen bearbeiten
//Notizen suchen
//Notiz Datum (erstellt am)
//Papierkorb, wird nach 30 tagen gelöscht

let notes = [];
let trashNotes = [];

function renderNotes() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentDiv.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    const trashContentDiv = document.getElementById('trashContent');
    trashContentDiv.innerHTML = '';
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentDiv.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<div class="note">
       <button onclick="deleteNote(${indexNote})">X</button> ${notes[indexNote]}
    </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="trash_note">
       <p>${trashNotes[indexTrashNote]}</p>
    </div>`;
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value

    notes.push(noteInput);
    renderNotes();

    noteInputRef.value = '';
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    
    renderNotes();
    renderTrashNotes();
}

