function getNoteTemplate(indexNote) {
    return `<div class="note-card">
                <div class="note-header">
                    <h1>${notes[indexNote]}</h1>
                    <p>Text</p>
                </div>

                <div class="note-footer">
                    <span class="heart-icon">❤</span>
                    <div class="menu-button">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<div class="trash_note">
       <button onclick="deleteNote(${indexTrashNote})">X</button><p>${trashNotes[indexTrashNote]}</p>
    </div>`;
}