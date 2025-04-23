// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    databaseURL: "https://TU_PROYECTO.firebaseio.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID"
};
firebase.initializeApp(firebaseConfig);

// Guardar puntajes
function saveScore(playerName, score) {
    firebase.database().ref('scores/').push({
        name: playerName,
        score: score
    });
}