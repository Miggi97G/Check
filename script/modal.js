// Funktion, die durch deinen Button aufgerufen wird
function myFunction() {
    document.getElementById('noteModal').style.display = 'flex';
}

// Modal schließen
function closeModal() {
    document.getElementById('noteModal').style.display = 'none';
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputText').value = '';
}

// Notiz speichern und zum Interface hinzufügen
function saveNote() {
    const title = document.getElementById('inputTitle').value;
    const text = document.getElementById('inputText').value;

    if (!title || !text) return alert("Bitte alles ausfüllen!");

    const notesList = document.getElementById('notesList');

    // Neues Div erstellen
    const newNote = document.createElement('div');
    newNote.className = 'note-card';
    
    // Dein HTML-Struktur einfügen
    newNote.innerHTML = `
        <div class="note-header">
            <h1>${title}</h1>
            <p>${text}</p>
        </div>
        <div class="note-footer">
            <span class="heart-icon">❤</span>
            <div class="menu-button">
                <span></span><span></span>
            </div>
        </div>
    `;

    // Scroll-Logik an die neue Karte binden
    addScrollBehavior(newNote);

    notesList.appendChild(newNote);
    closeModal();
}

// Hilfsfunktion für den Scroll-Effekt
function addScrollBehavior(element) {
    let scrollTimeout;
    element.addEventListener('scroll', () => {
        element.classList.add('is-scrolling');
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            element.classList.remove('is-scrolling');
        }, 800);
    });
}