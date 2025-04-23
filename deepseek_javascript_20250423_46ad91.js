// Piezas del rompecabezas (nodos y punteros)
const pieces = [
    { id: 1, type: 'node', value: 'A' },
    { id: 2, type: 'node', value: 'B' },
    { id: 3, type: 'pointer', value: '→' },
    { id: 4, type: 'pointer', value: 'null' }
];

// Área donde se colocan las piezas
const puzzleArea = document.getElementById('puzzle-area');
const piecesContainer = document.getElementById('pieces-container');
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');

// Mostrar piezas iniciales
pieces.forEach(piece => {
    const pieceElement = document.createElement('div');
    pieceElement.className = 'piece';
    pieceElement.textContent = piece.value;
    pieceElement.draggable = true;
    pieceElement.dataset.id = piece.id;
    pieceElement.dataset.type = piece.type;
    piecesContainer.appendChild(pieceElement);

    // Hacer piezas arrastrables
    pieceElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', piece.id);
    });
});

// Permitir soltar piezas en el área del rompecabezas
puzzleArea.addEventListener('dragover', (e) => {
    e.preventDefault();
});

puzzleArea.addEventListener('drop', (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = pieces.find(p => p.id == pieceId);
    const pieceElement = document.querySelector(`[data-id="${pieceId}"]`);

    // Clonar la pieza y colocarla en el área
    const clonedPiece = pieceElement.cloneNode(true);
    clonedPiece.style.position = 'absolute';
    clonedPiece.style.left = `${e.clientX - puzzleArea.getBoundingClientRect().left - 40}px`;
    clonedPiece.style.top = `${e.clientY - puzzleArea.getBoundingClientRect().top - 20}px`;
    puzzleArea.appendChild(clonedPiece);
});

// Verificar si el rompecabezas está correcto
checkBtn.addEventListener('click', () => {
    const placedPieces = puzzleArea.querySelectorAll('.piece');
    const isCorrect = placedPieces.length === 4; // Ejemplo simple

    if (isCorrect) {
        feedback.textContent = '✅ ¡Correcto! Has armado una lista enlazada.';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = '❌ Intenta de nuevo. Faltan piezas.';
        feedback.style.color = 'red';
    }
});