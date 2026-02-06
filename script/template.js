function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="trash_note">
       <button onclick="deleteNote(${indexTrashNote})">X</button><p>${trashNotes[indexTrashNote]}</p>
    </div>`;
}